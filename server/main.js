import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

	Push.debug = true;

	Push.Configure({
	  android: {
	    senderID: 834514837552, // Change it
	    alert: true,
	    badge: true,
	    sound: true,
	    vibrate: true,
	    clearNotifications: true
	  },
	  ios: {
	    alert: true,
	    badge: true,
	    sound: true
	  }
	});

  Push.allow({
    send: function(userId, notification) {
        return true; // Allow all users to send
    }
  });

	Meteor.methods({

		serverNotification: function (title, text) {

			console.log("Pushing message with Title:" + title + " Text:" + text);

			var badge = 1;

			Push.send({
				from : 'judo-push-notification',
				title: title,
				text : text,
				badge: badge,
				sound: 'default',
				payload: {
					title: title,
					text : text
				},
				query: {

				}
			});
		}
	});
});
