import { Meteor } from 'meteor/meteor';

import './models/startup';

Meteor.startup(async () => {
	await import("../app/api/server/canned-responses");
});
import '../app/authorization/server/index';
import '../app/canned-responses/server/index';
import '../app/livechat-foss/server/index';
import '../app/message-read-receipt/server/index'; 
import '../app/settings/server/index';
import './api';
import './requestSeatsRoute';
import './configuration/index';
import './local-services/ldap/service';
import './methods/getReadReceipts';
import './apps/startup';
import './patches'; 

export const registerFOSSBroker = async () => undefined;