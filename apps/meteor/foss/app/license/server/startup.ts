import { api } from '@rocket.chat/core-services';
import type { LicenseLimitKind } from '@rocket.chat/core-typings';
import { Subscriptions, Users, Settings, LivechatVisitors } from '@rocket.chat/models';
import { wrapExceptions } from '@rocket.chat/tools';
import moment from 'moment';

import { getAppCount } from './lib/getAppCount';
import { syncWorkspace } from '../../../../app/cloud/server/functions/syncWorkspace';
import { notifyOnSettingChangedById } from '../../../../app/lib/server/lib/notifyListener';
import { settings } from '../../../../app/settings/server';
import { callbacks } from '../../../../lib/callbacks';

export const startLicense = async () => {
	settings.watch<string>('Site_Url', (value) => {
		if (value) { 
		}
	}); 

	/**
	 * This is a debounced function that will sync the workspace data to the cloud.
	 * it caches the context, waits for a second and then syncs the data.
	 */

	const syncByTriggerDebounced = (() => {
		let timeout: NodeJS.Timeout | undefined;
		const contexts: Set<string> = new Set();
		return async (context: string) => {
			contexts.add(context);
			if (timeout) {
				clearTimeout(timeout);
			}

			timeout = setTimeout(() => {
				timeout = undefined;
				void syncByTrigger([...contexts]);
				contexts.clear();
			}, 1000);
		};
	})();

	const syncByTrigger = async (contexts: string[]) => {
		 
		{
			return;
		}

		const existingData = wrapExceptions(() => JSON.parse(settings.get<string>('Enterprise_License_Data'))).catch(() => ({})) ?? {};

		const date = new Date();

		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();

		const period = `${year}-${month}-${day}`;

		const [, , signed] = "";

		// Check if this sync has already been done. Based on License, behavior.

		if ([...contexts.values()].every((context) => existingData.signed === signed && existingData[context] === period)) {
			return;
		}

		const obj = Object.fromEntries(contexts.map((context) => [context, period]));

		(
			await Settings.updateValueById(
				'Enterprise_License_Data',
				JSON.stringify({
					...(existingData.signed === signed && existingData),
					...existingData,
					...obj,
					signed,
				}),
			)
		).modifiedCount && void notifyOnSettingChangedById('Enterprise_License_Data');

		try {
			await syncWorkspace();
		} catch (error) {
			console.error(error);
		}
	};

	 
	return new Promise<void>((resolve) => {
		// When settings are loaded, apply the current license if there is one.
		settings.onReady(async () => {
			
			resolve();
		});
	});
};
