import GenericDataGrid from '../components/item-collection/data-components/GenericDataGrid';
import { PetTypeGrids, PetTypeConfig } from './PageTypes';
import { DonationColors, PetServiceColors } from './Constants';
import GenericDataList from '../components/item-collection/data-components/GenericDataList';


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
	DONATION: {
		Grid: GenericDataList,
		pageConfig: {
			DetailModal: PetTypeConfig.DONATION.DetailModal,
			fetchSingle: PetTypeConfig.DONATION.fetchSingle,
			fetchSingleImages: PetTypeConfig.DONATION.fetchSingleImages,
			deleteSingle: PetTypeConfig.DONATION.deleteSingle,

			Card: PetTypeGrids.DONATION.Card,
			searchConfig: PetTypeGrids.DONATION.searchConfig,
			fetchData: PetTypeGrids.DONATION.fetchData,
			gridConfig:{
				xl:'4',
				lg:'6',
				sm:'6',
				xs:'12'
			},
			cardConfig:{
				noActions:true,
				topChip: true,
				chipValueField: 'advertisementType',
				getColor: (type)=>{
					return DonationColors[type];
				}
			}
		}
	}
};

// TODO
// textebi +
// formebis required ebis gadaxedva +
// searchshi map is damateba +
// donation (detail-modal, create) +
// petcare (detail-modal, create, card) +
// adoption squarze ro daachers lost-foundze gadavies da dzebnashi iyos monishnuli adoption+
// logout gasworeba redirect
// errorebi
// messangeris chasheneba
// header responsive

// adoption chasheneba lost-foundtan
// gatestva
// constantebshi pet service tu ragaca ro miweria magisi washla







//  "email_used":"",
//  "invalid_credentials": "",
//  "invalid_refresh_token": "",
//  "invalid_otp": "",
//  "otp_retries_exceeded": "",
//  "need_one_primary_image": "",
//  "invalid_old_password": "",
//  "invalid_email": ""



// werilebis damateba (~)
