// Import and register methods immediately for FOSS version
import { Meteor } from 'meteor/meteor';
Meteor.startup(async () => { 
	await import('./hooks/onRemoveAgentDepartment');
	await import('./hooks/onSaveAgentDepartment');
	await import('./methods/saveCannedResponse');
	await import('./methods/removeCannedResponse');
	await import('./hooks/cannedResponses');
	await import('./permissions');
	const { createSettings } = await import('./settings');
	await createSettings(); 
});