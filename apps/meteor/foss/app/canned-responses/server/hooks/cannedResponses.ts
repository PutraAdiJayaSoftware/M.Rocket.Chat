import { settings } from '../../../../../app/settings/server';
import { BeforeSaveCannedResponse } from '../../../../server/hooks/messages/BeforeSaveCannedResponse';

// direct on FOSS
settings.watch<boolean>('Canned_Responses_Enable', (value) => {
	BeforeSaveCannedResponse.enabled = value;
});
 