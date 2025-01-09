import { Settings, Statistics } from '@rocket.chat/models';

import { notifyOnSettingChangedById } from '../../../../app/lib/server/lib/notifyListener';
import { i18n } from '../../../../server/lib/i18n';
import { sendMessagesToAdmins } from '../../../../server/lib/sendMessagesToAdmins';
import { updateAuditedBySystem } from '../../../../server/settings/lib/auditedSettingUpdates';

const updateRestrictionSetting = async (remainingDays: number) => {
	await updateAuditedBySystem({
		reason: 'updateRestrictionSetting',
	})(Settings.updateValueById, 'Cloud_Workspace_AirGapped_Restrictions_Remaining_Days', remainingDays);
	void notifyOnSettingChangedById('Cloud_Workspace_AirGapped_Restrictions_Remaining_Days');
};

const sendRocketCatWarningToAdmins = async (remainingDays: number) => {
	const lastDayOrNoRestrictionsAtAll = remainingDays <= 0;
	if (lastDayOrNoRestrictionsAtAll) {
		return;
	} 
};

 