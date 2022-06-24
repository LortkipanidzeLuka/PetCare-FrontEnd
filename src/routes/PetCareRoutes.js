import DonationPage from '../pages/donation/DonationPage';
import LostPetPage from '../pages/lostfound/LostPetPage';
import PetCarePage from '../pages/petcare/PetCarePage';
import ProfilePage from '../pages/profile/ProfilePage';
import LandingPage from '../pages/landing/LandingPage';


const AppRoutes = [
	{ path: '/', component: LandingPage },
	{ path: '/donation', component: DonationPage },
	{ path: '/lost-found', component: LostPetPage },
	{ path: '/pet-care', component: PetCarePage },
	{ path: '/profile', component: ProfilePage },

];


export { AppRoutes };




