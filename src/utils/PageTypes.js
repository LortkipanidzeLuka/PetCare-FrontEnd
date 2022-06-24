import LostPetModal from '../pages/lostfound/LostPetModal';
import Api from '../services';
import GenericCardSquare from '../components/item-card/GenericCardSquare';
import { DONATION_SEARCH, LOST_AND_FOUND_SEARCH, PET_SERVICE_SEARCH } from './PageSearch';
import AddLostPet from '../pages/lostfound/AddLostPet';
import AddPetCare from '../pages/petcare/AddPetCare';
import AddDonation from '../pages/donation/AddDonation';
import PetCareModal from '../pages/petcare/PetCareModal';
import GenericCardRectangle from '../components/item-card/GenericCardRectangle';
import DonationModal from '../pages/donation/DonationModal';

export const PetTypeConfig={
	LOST_FOUND: {
		CreateModal: AddLostPet,
		DetailModal: LostPetModal,
		fetchSingle: Api.Lost.fetchSingleLostFound,
		fetchSingleImages: Api.Lost.fetchSingleLostFoundImages,
		deleteSingle: Api.Lost.deleteSingleLostFound
	},
	PET_SERVICE: {
		CreateModal: AddPetCare,
		DetailModal: PetCareModal,
		fetchSingle: Api.Serv.fetchSinglePetService,
		fetchSingleImages: Api.Serv.fetchSinglePetServiceImages,
		deleteSingle: Api.Serv.deleteSinglePetService
	},
	DONATION: {
		CreateModal: AddDonation,
		DetailModal: DonationModal,
		fetchSingle: Api.Donat.fetchSingleDonations,
		fetchSingleImages: Api.Donat.fetchSingleDonationsImages,
		deleteSingle: Api.Donat.deleteSingleDonations
	},
}

export const PetTypeGrids={
	LOST_FOUND: {
		Card: GenericCardSquare,
		searchConfig: LOST_AND_FOUND_SEARCH,
		fetchData: Api.Lost.fetchLostFounds
	},
	PET_SERVICE: {
		Card: GenericCardRectangle,
		searchConfig: PET_SERVICE_SEARCH,
		fetchData: Api.Serv.fetchPetServices
	},
	Donation: {
		Card: GenericCardRectangle,
		searchConfig: DONATION_SEARCH,
		fetchData: Api.Donat.fetchDonations
	},
}
