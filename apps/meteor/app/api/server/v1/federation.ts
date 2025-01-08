import { Federation  } from '@rocket.chat/core-services';
import { isFederationVerifyMatrixIdProps } from '@rocket.chat/rest-typings';

import { API } from '../api';

API.v1.addRoute(
	'federation/matrixIds.verify',
	{
		authRequired: true,
		validateParams: isFederationVerifyMatrixIdProps,
	},
	{
		async get() {
			const { matrixIds } = this.queryParams;

			const federationService =   Federation;

			const results = await federationService.verifyMatrixIds(matrixIds);

			return API.v1.success({ results: Object.fromEntries(results) });
		},
	},
);

API.v1.addRoute(
	'federation/configuration.verify',
	{ authRequired: true, permissionsRequired: ['view-privileged-setting'] },
	{
		async get() {
			const service = Federation;

			const status = await service.configurationStatus();

			if (!status.externalReachability.ok || !status.appservice.ok) {
				return API.v1.failure(status);
			}

			return API.v1.success(status);
		},
	},
);
