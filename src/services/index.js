import SecurityApi from './api/SecurityApi';
import LostFoundApi from './api/LostFoundApi';
import ProfileApi from './api/ProfileApi';
import AdoptionApi from './api/AdoptionApi';
import PetCareApi from './api/PetCareApi';

const Api = {
	Sec: SecurityApi,
	Lost: LostFoundApi,
	Prof: ProfileApi,
	Adopt: AdoptionApi,
	Serv: PetCareApi
};
export default Api;
