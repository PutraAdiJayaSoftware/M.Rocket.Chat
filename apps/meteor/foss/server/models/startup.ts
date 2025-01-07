import { License } from '@rocket.chat/license';

// To facilitate our lives with the stream
// Collection will be registered on CE too
// No functionality will be imported tho, just the service registration
import('./LivechatPriority');
import('./OmnichannelServiceLevelAgreements');
import('./AuditLog');
import('./ReadReceipts');
import('./CannedResponse');  // Import   model for FOSS version
import('./LivechatDepartment');  // Import   model for FOSS version
import('./LivechatDepartmentAgents');  // Import   model for FOSS version
 


void License.onLicense('livechat-enterprise', () => {
	import('./LivechatTag');
	import('./LivechatUnit');
	import('./LivechatUnitMonitors');
	import('./LivechatPriority');
	import('./LivechatRooms');
	import('./LivechatInquiry');
	import('./LivechatDepartment');
	import('./Users');
	import('./LivechatDepartmentAgents');
	import('./CannedResponse');  // Also load for EE version
});
