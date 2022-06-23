import AdoptionPage from '../pages/adoption/AdoptionPage';
import Charity from '../pages/charity/Charity';
import LostPetPage from '../pages/lostfound/LostPetPage';
import Advertisement from '../pages/petcare/Advertisement';
import ProfilePage from '../pages/profile/ProfilePage';
import LandingPage from '../pages/landing/LandingPage';


const AppRoutes = [
	{ path: '/', component: LandingPage },
	{ path: '/adoption', component: AdoptionPage },
	{ path: '/charity', component: Charity },
	{ path: '/lost-found', component: LostPetPage },
	{ path: '/pet-care', component: Advertisement },
	{ path: '/profile', component: ProfilePage },

];


export { AppRoutes };




