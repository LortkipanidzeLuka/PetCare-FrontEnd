import DonationPage from '../pages/donation/DonationPage';
import AnimaHelpPage from '../pages/animalhelp/AnimaHelpPage';
import PetCarePage from '../pages/petcare/PetCarePage';
import ProfilePage from '../pages/profile/ProfilePage';
import LandingPage from '../pages/landing/LandingPage';
import AdoptionPage from '../pages/animalhelp/AdoptionPage';


const AppRoutes = [
	{ path: '/', component: LandingPage },
	{ path: '/donation', component: DonationPage },
	{ path: '/animal-help', component: AnimaHelpPage },
	{ path: '/adoption', component: AdoptionPage },
	{ path: '/pet-care', component: PetCarePage },
	{ path: '/profile', component: ProfilePage },

];


export { AppRoutes };




