import GenericDataGrid from '../components/item-collection/data-components/GenericDataGrid';
import { PetTypeGrids, PetTypeConfig } from './PageTypes';
import { DonationColors, DonationOptionsMap, PetServiceColors, PetServiceOptionsMap } from './Constants';
import GenericDataList from '../components/item-collection/data-components/GenericDataList';
import { PROFILE_SEARCH } from './PageSearch';
import ProfileAdvertisementModal from '../pages/profile/tabs/ProfileAdvertisementModal';
import GenericCardRectangle from '../components/item-card/GenericCardRectangle';
import Api from '../services';


export const ARTEFACT_PAGES = {
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

export const PROFILE_PAGE = {
	Grid: GenericDataList,
	pageConfig: {
		DetailModal: ProfileAdvertisementModal,

		Card: GenericCardRectangle,
		searchConfig: PROFILE_SEARCH,
		fetchData: Api.Prof.advertisements,
		cardConfig:{
			noActions:false,
			topChip: false,
			chipValueField: null,
			getColor: ()=>{ },
			getTitle: ()=>{ },
			actions:[
				{
					name:'REFRESH_ACTION',
					divClassName:'refresh-action',
					icon:'mdi-refresh',
					display:(data)=>{
						return data && data.expired;
					}
				},
				{
					name:'EDIT_ACTION',
					divClassName:'edit-action',
					icon:'mdi-pencil',
					display:()=>{
						return true;
					}
				},
				{
					name:'DELETE_ACTION',
					divClassName:'delete-action',
					icon:'mdi-delete',
					display:()=>{
						return true;
					}
				}
			],
			actionMethods:[],
		}
	}

}
// TODO
// gatestva
