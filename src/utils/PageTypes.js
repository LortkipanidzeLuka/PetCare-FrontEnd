import LostPetModal from '../pages/lostfound/LostPetModal';
import Api from '../services';
import GenericCardSquare from '../components/item-card/GenericCardSquare';
import { LOST_AND_FOUND_SEARCH, PET_SERVICE_SEARCH } from './PageSearch';
import AddLostPet from '../pages/lostfound/AddLostPet';
import AddPetCare from '../pages/petcare/AddPetCare';
import AddCharity from '../pages/charity/AddCharity';
import PetCareModal from '../pages/petcare/PetCareModal';
import GenericCardRectangle from '../components/item-card/GenericCardRectangle';

export const PetTypeConfig={
	LOST_FOUND: {
		CreateModal: AddLostPet,
		DetailModal: LostPetModal,
		fetchSingle: Api.Lost.fetchSingleLostFound,
		fetchSingleImages: Api.Lost.fetchSingleLostFoundImages,
		deleteSingle: Api.Lost.deleteSingleLostFound
	},
	PET_CARE: {
		CreateModal: AddPetCare,
		DetailModal: PetCareModal,
		fetchSingle: Api.Serv.fetchSinglePetService,
		fetchSingleImages: Api.Serv.fetchSinglePetServiceImages,
		deleteSingle: Api.Serv.deleteSinglePetService
	},
	CHARITY: {
		CreateModal: AddCharity,
		DetailModal: LostPetModal,
		fetchSingle: Api.Lost.fetchSingleLostFound,
		fetchSingleImages: Api.Lost.fetchSingleLostFoundImages,
		deleteSingle: Api.Lost.deleteSingleLostFound
	},
}

export const PetTypeGrids={
	LOST_FOUND: {
		Card: GenericCardSquare,
		searchConfig: LOST_AND_FOUND_SEARCH,
		fetchData: Api.Lost.fetchLostFounds
	},
	PET_CARE: {
		Card: GenericCardRectangle,
		searchConfig: PET_SERVICE_SEARCH,
		fetchData: Api.Serv.fetchPetServices
	},
	CHARITY: {
		Card: GenericCardSquare,
		searchConfig: LOST_AND_FOUND_SEARCH,
		fetchData: Api.Lost.fetchLostFounds
	},
}
