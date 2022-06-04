import LostPetModal from '../pages/lostfound/LostPetModal';
import Api from '../services';
import GenericCardSquare from '../components/item-card/GenericCardSquare';
import { LOST_AND_FOUND_SEARCH } from './PageSearch';
import AddLostPet from '../pages/lostfound/AddLostPet';
import AddPetCare from '../pages/advertisment/AddPetCare';
import AddAdoption from '../pages/adoption/AddAdoption';
import AddCharity from '../pages/charity/AddCharity';

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
		DetailModal: LostPetModal,
		fetchSingle: Api.Lost.fetchSingleLostFound,
		fetchSingleImages: Api.Lost.fetchSingleLostFoundImages,
		deleteSingle: Api.Lost.deleteSingleLostFound
	},
	ADOPTION: {
		CreateModal: AddAdoption,
		DetailModal: LostPetModal,
		fetchSingle: Api.Lost.fetchSingleLostFound,
		fetchSingleImages: Api.Lost.fetchSingleLostFoundImages,
		deleteSingle: Api.Lost.deleteSingleLostFound
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
		Card: GenericCardSquare,
		searchConfig: LOST_AND_FOUND_SEARCH,
		fetchData: Api.Lost.fetchLostFounds
	},
	ADOPTION: {
		Card: GenericCardSquare,
		searchConfig: LOST_AND_FOUND_SEARCH,
		fetchData: Api.Lost.fetchLostFounds
	},
	CHARITY: {
		Card: GenericCardSquare,
		searchConfig: LOST_AND_FOUND_SEARCH,
		fetchData: Api.Lost.fetchLostFounds
	},
}
