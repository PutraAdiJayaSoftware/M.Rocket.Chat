import { Meteor } from 'meteor/meteor';
Meteor.startup(async () => {
	await import("./canned-responses");
});
