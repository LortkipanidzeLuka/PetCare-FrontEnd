import AnimalHelpModal from '../pages/animalhelp/AnimalHelpModal';
import Api from '../services';
import GenericCardSquare from '../components/item-card/GenericCardSquare';
import { DONATION_SEARCH, LOST_AND_FOUND_SEARCH, PET_SERVICE_SEARCH } from './PageSearch';
import AddAnimalHelp from '../pages/animalhelp/AddAnimalHelp';
import AddPetCare from '../pages/petcare/AddPetCare';
import AddDonation from '../pages/donation/AddDonation';
import PetCareModal from '../pages/petcare/PetCareModal';
import GenericCardRectangle from '../components/item-card/GenericCardRectangle';
import DonationModal from '../pages/donation/DonationModal';

export const PetTypeConfig={
	ANIMAL_HELP: {
		CreateModal: AddAnimalHelp,
		DetailModal: AnimalHelpModal,
		fetchSingle: Api.Help.fetchSingleAnimalHelp,
		fetchSingleImages: Api.Help.fetchSingleAnimalHelpImages,
		deleteSingle: Api.Help.deleteSingleAnimalHelp,
		refreshSingle: Api.Help.refreshSingleAnimalHelp
	},
	PET_SERVICE: {
		CreateModal: AddPetCare,
		DetailModal: PetCareModal,
		fetchSingle: Api.Serv.fetchSinglePetService,
		fetchSingleImages: Api.Serv.fetchSinglePetServiceImages,
		deleteSingle: Api.Serv.deleteSinglePetService,
		refreshSingle: Api.Serv.refreshSinglePetService
	},
	DONATION: {
		CreateModal: AddDonation,
		DetailModal: DonationModal,
		fetchSingle: Api.Donat.fetchSingleDonations,
		fetchSingleImages: Api.Donat.fetchSingleDonationsImages,
		deleteSingle: Api.Donat.deleteSingleDonations,
		refreshSingle: Api.Donat.refreshSingleDonation
	},
}

export const PetTypeGrids={
	ANIMAL_HELP: {
		Card: GenericCardSquare,
		searchConfig: LOST_AND_FOUND_SEARCH,
		fetchData: Api.Help.fetchAnimalHelps
	},
	PET_SERVICE: {
		Card: GenericCardRectangle,
		searchConfig: PET_SERVICE_SEARCH,
		fetchData: Api.Serv.fetchPetServices
	},
	DONATION: {
		Card: GenericCardRectangle,
		searchConfig: DONATION_SEARCH,
		fetchData: Api.Donat.fetchDonations
	},
}
