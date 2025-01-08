import { Calendar } from '@rocket.chat/core-services';
import { Meteor } from 'meteor/meteor';

import { addSettings } from '../settings/outlookCalendar';

/* 
Meteor.startup(async () => {
	await addSettings();
	await Calendar.setupNextNotification();
});
 */