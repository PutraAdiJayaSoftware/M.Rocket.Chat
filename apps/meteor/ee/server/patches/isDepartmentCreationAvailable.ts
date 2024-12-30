import { isDepartmentCreationAvailable } from '../../../app/livechat/server/lib/isDepartmentCreationAvailable';

isDepartmentCreationAvailable.patch(async (next) => {
	// Skip the standard check when Livechat Enterprise is enabled, as it allows unlimited departments
	
	return next();
});
