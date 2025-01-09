import { api, getConnection, getTrashCollection } from '@rocket.chat/core-services';
import { Logger } from '@rocket.chat/logger';
import { startTracing } from '@rocket.chat/tracing';
import polka from 'polka';

import { registerServiceModels } from '../../../../apps/meteor/foss/server/lib/registerServiceModels';

const PORT = process.env.PORT || 3038;

(async () => {
	const { db, client } = await getConnection();

	startTracing({ service: 'queue-worker', db: client });

	registerServiceModels(db, await getTrashCollection());

 
	await api.start();

	polka()
		.get('/health', async function (_req, res) {
			try {
				await api.nodeList();
				res.end('ok');
			} catch (err) {
				console.error('Service not healthy', err);

				res.writeHead(500);
				res.end('not healthy');
			}
		})
		.listen(PORT);
})();
