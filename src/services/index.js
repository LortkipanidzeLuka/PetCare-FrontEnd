import SecurityApi from './api/SecurityApi';
import LostFoundApi from './api/LostFoundApi';
import ProfileApi from './api/ProfileApi';
import PetCareApi from './api/PetCareApi';

const Api = {
	Sec: SecurityApi,
	Lost: LostFoundApi,
	Prof: ProfileApi,
	Serv: PetCareApi
};
export default Api;
