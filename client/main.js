import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import OKGAnalytics, { analytics } from '@okgrow/auto-analytics';
import './main.html';

Meteor.methods({
    'isLoggedIn': function(){
        return Session.get('user') != undefined;
    },

	'home': function(){
		if( Meteor.call('isLoggedIn') )
			Session.set('page', 'loggedin');
		else
			Session.set('page', 'index');

	},

	'logout': function(){
		Session.clearPersistent();
		Meteor.call('isLoggedIn');
	}
});

Session.setDefault('page', 'index');

Template.index.onCreated(function indexOnCreated() {
	this.formErrors = new ReactiveVar("");
	$('#login-error').hide();
        OKGAnalytics(Meteor.settings.public.analyticsSettings);
});

Template.loggedin.onRendered(function () {
  $('#warning').hide();
});

Template.body.helpers({
        currentPage: function(page){
            return Session.get('page')
        }
});

Template.index.helpers({
  formErrors() {
    return Template.instance().formErrors.get();
  },
});

Template.loggedin.helpers({
});

Router.route('/', function() {
	Meteor.call('home');
});

Router.route('/loggedin', function() {
	Meteor.call('home');
});

Template.index.events({
  'submit form' : function(event, instance) {
	event.preventDefault();
	var userName = event.target.username.value;
	var password = event.target.password.value;

	$('#login-error').hide();
	instance.formErrors.set("");

	if(userName === password) {
	  Session.setPersistent({user: event.target.username.value});
	  Router.go('loggedin');
	} else {
      $('#login-error').show();
	  instance.formErrors.set("User login error.");
	}
  },
});

Template.loggedin.events({
  'click #logout' : function(event, instance) {
	  event.preventDefault();
	  Meteor.call('logout');
  },

  'click #push' : function(event, template) {
    var message = template.find('#message').value;
    $('#warning').show('slow').delay(5000).hide('slow');
    Meteor.call("serverNotification", "Message Title", message);

    // Send Mix Panel notification
    analytics.track("Judo Push Notification", {
      eventName: "Push Message",
      messageValue: message,
    });
  }
});
