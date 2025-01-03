import { License } from '@rocket.chat/license'; 

require('./canned-responses');

await License.onLicense('canned-responses', async () => {
	delete require.cache[require.resolve('./canned-responses')];
	require('./canned-responses');
});

License.onValidateLicense(async () => {
	await import('./voip-freeswitch');
});
