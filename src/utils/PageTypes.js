import LostPetModal from '../pages/lostfound/LostPetModal';
import Api from '../services';
import GenericCardSquare from '../components/item-card/GenericCardSquare';
import { LOST_AND_FOUND_SEARCH } from './PageSearch';

export const PetTypeConfig={
	LOST_FOUND: {
		DetailModal: LostPetModal,
		fetchSingle: Api.Lost.fetchSingleLostFound,
		fetchSingleImages: Api.Lost.fetchSingleLostFoundImages,
		deleteSingle: Api.Lost.deleteSingleLostFound
	},
	PET_CARE: {
		DetailModal: LostPetModal,
		fetchSingle: Api.Lost.fetchSingleLostFound,
		fetchSingleImages: Api.Lost.fetchSingleLostFoundImages,
		deleteSingle: Api.Lost.deleteSingleLostFound
	},
	ADOPTION: {
		DetailModal: LostPetModal,
		fetchSingle: Api.Lost.fetchSingleLostFound,
		fetchSingleImages: Api.Lost.fetchSingleLostFoundImages,
		deleteSingle: Api.Lost.deleteSingleLostFound
	},
	CHARITY: {
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
