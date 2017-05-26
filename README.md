# Judo Push Notification

# Project Goal

The purpose of this app is to create a dummy app with Meteor and React and Push Notification capabilities.

Judo Push Notification App has the following pages:

- meteor user authentication pages (Meteor built in);

- landing page (if user is logged in);

Landing page will have:

- text input;

- submit button;

When user clicks on submit button: 

- Text input should be sent as push notification to all other users registered (push notification goes to home screen).

- Mixpanel analytics event “Push notification sent” will be fired.

App should be built for iOS/Android platforms and those features should work across all platforms.

Preferable use of these packages:

- https://github.com/raix/push

- https://github.com/okgrow/analytics - Mixpanel config only

# Installation Instruction