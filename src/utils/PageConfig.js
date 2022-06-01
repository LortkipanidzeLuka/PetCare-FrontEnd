import GenericDataGrid from '../components/item-collection/data-components/GenericDataGrid';
import { PetTypeGrids, PetTypeModals } from './PageTypes';


export const PAGES = {
	LOST_FOUND: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: PetTypeModals.LOST_FOUND.DetailModal,
			fetchSingle: PetTypeModals.LOST_FOUND.fetchSingle,
			fetchSingleImages: PetTypeModals.LOST_FOUND.fetchSingleImages,
			deleteSingle: PetTypeModals.LOST_FOUND.deleteSingle,

			Card: PetTypeGrids.LOST_FOUND.Card,
			searchConfig: PetTypeGrids.LOST_FOUND.searchConfig,
			fetchData: PetTypeGrids.LOST_FOUND.fetchData
		}
	},
	PET_CARE: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: PetTypeModals.PET_CARE.DetailModal,
			fetchSingle: PetTypeModals.PET_CARE.fetchSingle,
			fetchSingleImages: PetTypeModals.PET_CARE.fetchSingleImages,
			deleteSingle: PetTypeModals.PET_CARE.deleteSingle,

			Card: PetTypeGrids.PET_CARE.Card,
			searchConfig: PetTypeGrids.PET_CARE.searchConfig,
			fetchData: PetTypeGrids.PET_CARE.fetchData
		}
	},
	ADOPTION: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: PetTypeModals.ADOPTION.DetailModal,
			fetchSingle: PetTypeModals.ADOPTION.fetchSingle,
			fetchSingleImages: PetTypeModals.ADOPTION.fetchSingleImages,
			deleteSingle: PetTypeModals.ADOPTION.deleteSingle,

			Card: PetTypeGrids.ADOPTION.Card,
			searchConfig: PetTypeGrids.ADOPTION.searchConfig,
			fetchData: PetTypeGrids.ADOPTION.fetchData
		}
	},
	CHARITY: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: PetTypeModals.CHARITY.DetailModal,
			fetchSingle: PetTypeModals.CHARITY.fetchSingle,
			fetchSingleImages: PetTypeModals.CHARITY.fetchSingleImages,
			deleteSingle: PetTypeModals.CHARITY.deleteSingle,

			Card: PetTypeGrids.CHARITY.Card,
			searchConfig: PetTypeGrids.CHARITY.searchConfig,
			fetchData: PetTypeGrids.CHARITY.fetchData
		}
	}
};

// axiosshi ro ar anaxles deleteAuth is mere (window reload vcado) +
// profiles cxrili + editebi
// modalebshi edit mode
// parametrebis gayoleba dzebnis dros
// map is damateba
// emailverified ს ბევრჯერ აგზავნის +

// werilebis damateba
