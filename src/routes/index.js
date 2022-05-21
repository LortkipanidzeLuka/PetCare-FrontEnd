import Adoption from '../pages/adoption/Adoption';
import Charity from '../pages/charity/Charity';
import LostPet from '../pages/lost/LostPet';
import Advertisement from '../pages/advertisment/Advertisement';


const AppRoutes = [
	{ path: '/', component: Adoption },
	{ path: '/adoption', component: Adoption },
	{ path: '/charity', component: Charity },
	{ path: '/lost', component: LostPet },
	{ path: '/pet-care', component: Advertisement }
];


export { AppRoutes };

// card damtavreba +
// responsive +
// pagination
// modal
// detail page
// services
// redux (shabat kvira)
// generic grid (later)
// generic detail page (later)




