import GenericDataGrid from '../components/item-collection/data-components/GenericDataGrid';
import { PetTypeGrids, PetTypeConfig } from './PageTypes';


export const PAGES = {
	LOST_FOUND: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: PetTypeConfig.LOST_FOUND.DetailModal,
			fetchSingle: PetTypeConfig.LOST_FOUND.fetchSingle,
			fetchSingleImages: PetTypeConfig.LOST_FOUND.fetchSingleImages,
			deleteSingle: PetTypeConfig.LOST_FOUND.deleteSingle,

			Card: PetTypeGrids.LOST_FOUND.Card,
			searchConfig: PetTypeGrids.LOST_FOUND.searchConfig,
			fetchData: PetTypeGrids.LOST_FOUND.fetchData
		}
	},
	PET_CARE: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: PetTypeConfig.PET_CARE.DetailModal,
			fetchSingle: PetTypeConfig.PET_CARE.fetchSingle,
			fetchSingleImages: PetTypeConfig.PET_CARE.fetchSingleImages,
			deleteSingle: PetTypeConfig.PET_CARE.deleteSingle,

			Card: PetTypeGrids.PET_CARE.Card,
			searchConfig: PetTypeGrids.PET_CARE.searchConfig,
			fetchData: PetTypeGrids.PET_CARE.fetchData
		}
	},
	ADOPTION: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: PetTypeConfig.ADOPTION.DetailModal,
			fetchSingle: PetTypeConfig.ADOPTION.fetchSingle,
			fetchSingleImages: PetTypeConfig.ADOPTION.fetchSingleImages,
			deleteSingle: PetTypeConfig.ADOPTION.deleteSingle,

			Card: PetTypeGrids.ADOPTION.Card,
			searchConfig: PetTypeGrids.ADOPTION.searchConfig,
			fetchData: PetTypeGrids.ADOPTION.fetchData
		}
	},
	CHARITY: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: PetTypeConfig.CHARITY.DetailModal,
			fetchSingle: PetTypeConfig.CHARITY.fetchSingle,
			fetchSingleImages: PetTypeConfig.CHARITY.fetchSingleImages,
			deleteSingle: PetTypeConfig.CHARITY.deleteSingle,

			Card: PetTypeGrids.CHARITY.Card,
			searchConfig: PetTypeGrids.CHARITY.searchConfig,
			fetchData: PetTypeGrids.CHARITY.fetchData
		}
	}
};

// 2. edit is moadalebis component
// 3. damatebis gilakis galamazeba
// 4. profilidan damateba
// 5. are you sure modal

// bugebi:
// 1. petType bagavs dzebnis dros
// 2. advertisement shi search tu nullia lowercasze agdebs exceptions back
//

// werilebis damateba
// ruka
