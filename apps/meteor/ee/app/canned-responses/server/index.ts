import { License } from '@rocket.chat/license'; 

// Import and register methods immediately for FOSS version
import './methods/saveCannedResponse';
import './methods/removeCannedResponse';
import './hooks/cannedResponses';
import './permissions';
const { createSettings } = await import('./settings');
await createSettings();

// Keep EE version for compatibility
await License.onLicense('canned-responses', async () => {
	const { createSettings } = await import('./settings');
	await import('./permissions');
	await import('./hooks/onRemoveAgentDepartment');
	await import('./hooks/onSaveAgentDepartment');
	await import('./hooks/cannedResponses');
	await import('./methods/saveCannedResponse');
	await import('./methods/removeCannedResponse');

	await createSettings();
});
