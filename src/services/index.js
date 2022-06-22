import SecurityApi from './api/SecurityApi';
import LostFoundApi from './api/LostFoundApi';
import ProfileApi from './api/ProfileApi';
import AdoptionApi from './api/AdoptionApi';

const Api = {
	Sec: SecurityApi,
	Lost: LostFoundApi,
	Prof: ProfileApi,
	Adopt: AdoptionApi
};
export default Api;
