import Adoption from '../pages/adoption/Adoption';
import Charity from '../pages/charity/Charity';
import LostPet from '../pages/lostfound/LostPet';
import Advertisement from '../pages/advertisment/Advertisement';


const AppRoutes = [
	{ path: '/', component: Adoption },
	{ path: '/adoption', component: Adoption },
	{ path: '/charity', component: Charity },
	{ path: '/api', component: LostPet },
	{ path: '/pet-care', component: Advertisement }
];


export { AppRoutes };
// TODO
// add 	pet is validaciebi
// loadingis galamazeba
// hashtagebis componenti




