import { type ILicenseTag, type LicenseModule } from '@rocket.chat/core-typings';
import type { ServerMethods } from '@rocket.chat/ddp-client';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

declare module '@rocket.chat/ddp-client' {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	interface ServerMethods {
		'license:hasLicense'(feature: string): boolean;
		'license:getModules'(): string[];
		'license:getTags'(): ILicenseTag[];
		'license:isEnterprise'(): boolean;
	}
}

Meteor.methods<ServerMethods>({
	'license:hasLicense'() {
		return false;
	},
	'license:getModules'() {
		return [];
	},
	'license:getTags'() {
		return [];
	},
	'license:isEnterprise'() {
		return false;
	},
});
