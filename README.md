# Judo Push Notification

## Project Goal

The purpose of this app is to create a dummy app with Meteor and React and Push Notification capabilities.

**Judo Push Notification App has the following pages:**

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

## Installation Instruction

Run the below commands in order to install necessary meteor packages:

- meteor add kadira:blaze-layout

- meteor add raix:push

- meteor add session

- meteor add accounts-u

- meteor add useraccounts:flow-routing

- meteor add  okgrow:analytics

- meteor add bootstrap

- meteor add iron:router

- npm install @okgrow/auto-analytics

## For the Account, please choose one or more account type access:

- meteor add accounts-password

- meteor add accounts-facebook (also add meteor add facebook-config-ui)

- meteor add accounts-google

- meteor add accounts-github

- meteor add accounts-twitter

- meteor add accounts-meetup

- meteor add accounts-meteor-developer

You would need to configure manually your account access.

## Mixpanel Analytics (OK GROW)
### Link: https://github.com/okgrow/analytics

OK GROW! analytics uses a combination of the browser History API, Meteor's accounts package and Segment.io's analytics.js to automatically record and send user identity and page view event data from your Meteor app to your analytics platforms.

For the full Mixpanel Analytics docs, please visit: https://www.npmjs.com/package/@okgrow/auto-analytics

## Start Jugo Application Steps

In order to start Jugo app with that settings file as follows:

meteor --settings settings.json