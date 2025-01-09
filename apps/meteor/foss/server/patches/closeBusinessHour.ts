import { closeBusinessHour, closeBusinessHourByAgentIds } from '../../../app/livechat/server/business-hour/closeBusinessHour';
import { getAgentIdsToHandle } from '../../app/livechat-foss/server/business-hour/Helper';

closeBusinessHour.patch(async (_next, businessHour) => {
	const agentIds = await getAgentIdsToHandle(businessHour);
	return closeBusinessHourByAgentIds(businessHour._id, agentIds);
});
