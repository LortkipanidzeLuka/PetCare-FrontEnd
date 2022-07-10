import AnimalHelpApi from './api/AnimalHelpApi';
import SecurityApi from './api/SecurityApi';
import ProfileApi from './api/ProfileApi';
import PetCareApi from './api/PetCareApi';
import DonationApi from './api/DonationApi';

const Api = {
	Sec: SecurityApi,
	Help: AnimalHelpApi,
	Prof: ProfileApi,
	Serv: PetCareApi,
	Donat: DonationApi
};
export default Api;
