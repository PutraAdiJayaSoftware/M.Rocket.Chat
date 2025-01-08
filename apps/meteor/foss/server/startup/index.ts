import '../../app/authorization/server';
import './apps';
import './audit';
import './deviceManagement';
import './engagementDashboard';
import './maxRoomsPerGuest';
import './upsell'; 

export const registerFOSSBroker = async (): Promise<void> => {  
	require('./presence'); 
};
