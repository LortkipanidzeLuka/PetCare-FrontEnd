import GenericDataGrid from '../components/item-collection/data-components/GenericDataGrid';
import { PetTypeGrids, PetTypeConfig } from './PageTypes';
import { DonationColors, DonationOptionsMap, PetServiceColors, PetServiceOptionsMap } from './Constants';
import GenericDataList from '../components/item-collection/data-components/GenericDataList';


export const PAGES = {
	ANIMAL_HELP: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: PetTypeConfig.ANIMAL_HELP.DetailModal,
			fetchSingle: PetTypeConfig.ANIMAL_HELP.fetchSingle,
			fetchSingleImages: PetTypeConfig.ANIMAL_HELP.fetchSingleImages,
			deleteSingle: PetTypeConfig.ANIMAL_HELP.deleteSingle,
			refreshSingle: PetTypeConfig.ANIMAL_HELP.refreshSingle,

			Card: PetTypeGrids.ANIMAL_HELP.Card,
			searchConfig: PetTypeGrids.ANIMAL_HELP.searchConfig,
			fetchData: PetTypeGrids.ANIMAL_HELP.fetchData,
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
			refreshSingle: PetTypeConfig.PET_SERVICE.refreshSingle,

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
				chipValueField: 'petServiceType',
				getColor: (type)=>{
					return PetServiceColors[type];
				},
				getTitle: (type)=>{
					return PetServiceOptionsMap[type];
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
			refreshSingle: PetTypeConfig.DONATION.refreshSingle,

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
				chipValueField: 'donationAdvertisementType',
				getColor: (type)=>{
					return DonationColors[type];
				},
				getTitle: (type)=>{
					return DonationOptionsMap[type];
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
// header responsive+
// messangeris chasheneba +
// constantebshi pet service tu ragaca ro miweria magisi washla +
// adoption chasheneba lost-foundtan+
// logout gasworeba redirect+

// refresh and list icons config
// errorebi



// gatestva






//  "email_used":"",
//  "invalid_credentials": "",
//  "invalid_refresh_token": "",
//  "invalid_otp": "",
//  "otp_retries_exceeded": "",
//  "need_one_primary_image": "",
//  "invalid_old_password": "",
//  "invalid_email": ""



// werilebis damateba (~)
