import GenericDataGrid from '../components/item-collection/data-components/GenericDataGrid';
import { PetTypeGrids, PetTypeConfig } from './PageTypes';
import { PetServiceColors } from './Constants';


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
			fetchData: PetTypeGrids.LOST_FOUND.fetchData,
			gridConfig:{
				xl:'4',
				lg:'6',
				sm:'6',
				xs:'12'
			}
		}
	},
	PET_SERVICE: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: PetTypeConfig.PET_SERVICE.DetailModal,
			fetchSingle: PetTypeConfig.PET_SERVICE.fetchSingle,
			fetchSingleImages: PetTypeConfig.PET_SERVICE.fetchSingleImages,
			deleteSingle: PetTypeConfig.PET_SERVICE.deleteSingle,

			Card: PetTypeGrids.PET_SERVICE.Card,
			searchConfig: PetTypeGrids.PET_SERVICE.searchConfig,
			fetchData: PetTypeGrids.PET_SERVICE.fetchData,
			gridConfig:{
				xxl:'6',
				xl:'12',
				lg:'12',
				md:'12',
				sm:'12',
				xs:'12'
			},
			cardConfig:{
				noActions:true,
				topChip: true,
				chipValueField: 'advertisementType',
				getColor: (type)=>{
					return PetServiceColors[type];
				}
			}
		}
	},
	Donation: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: PetTypeConfig.Donation.DetailModal,
			fetchSingle: PetTypeConfig.Donation.fetchSingle,
			fetchSingleImages: PetTypeConfig.Donation.fetchSingleImages,
			deleteSingle: PetTypeConfig.Donation.deleteSingle,

			Card: PetTypeGrids.Donation.Card,
			searchConfig: PetTypeGrids.Donation.searchConfig,
			fetchData: PetTypeGrids.Donation.fetchData
		}
	}
};

// TODO
// textebi
// errorebi
// donation (detail-modal, create)
// adoption chasheneba lost-foundtan
// petcare (detail-modal, create, card) +
// formebis required ebis gadaxedva
// gatestva
// werilebis damateba (~)





//  "email_used":"",
//  "invalid_credentials": "",
//  "invalid_refresh_token": "",
//  "invalid_otp": "",
//  "otp_retries_exceeded": "",
//  "need_one_primary_image": "",
//  "invalid_old_password": "",
//  "invalid_email": ""
