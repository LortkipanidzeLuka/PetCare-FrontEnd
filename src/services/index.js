import SecurityApi from './api/SecurityApi';
import LostFoundApi from './api/LostFoundApi';
import ProfileApi from './api/ProfileApi';
import PetCareApi from './api/PetCareApi';
import DonationApi from './api/DonationApi';

const Api = {
	Sec: SecurityApi,
	Lost: LostFoundApi,
	Prof: ProfileApi,
	Serv: PetCareApi,
	Donat: DonationApi
};
export default Api;
