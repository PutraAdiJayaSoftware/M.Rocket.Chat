// require('./canned-responses');
// require('./voip-freeswitch'); 

import { Meteor } from 'meteor/meteor';
Meteor.startup(async () => {
	await import("./canned-responses"); 
});