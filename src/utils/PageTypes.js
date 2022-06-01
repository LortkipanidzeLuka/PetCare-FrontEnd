import LostPetModal from '../pages/lostfound/LostPetModal';
import Api from '../services';
import GenericCardSquare from '../components/item-card/GenericCardSquare';
import { LOST_AND_FOUND_SEARCH } from './PageSearch';

// const LOST_FOUND = "LOST_FOUND";
// const PET_CARE = "PET_CARE";
// const CHARITY = "CHARITY";
// const ADOPTION = "ADOPTION";
//
//
// const PageTypesOptions = [
// 	{ value: LOST_FOUND, label: 'Lost And Found' },
// 	{ value: PET_CARE, label: 'Pet Care' },
// 	{ value: CHARITY, label: 'Charity' },
// 	{ value: ADOPTION, label: 'Pet Adoption' },
// ];

export const PetTypeModals={
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
