import LostPetModal from '../pages/lostfound/LostPetModal';
import GenericCardSquare from '../components/item-card/GenericCardSquare';
import Api from '../services';
import GenericDataGrid from '../components/item-grid/GenericDataGrid';
import { SelectFormInput } from '../components/form/SelectFormInput';
import { City, PetColor, PetSex, PetTypes } from './Constants';
import { TextFormInput } from '../components/form/TextFormInput';

const DefaultFormConfig = {
	lg: '12', xl: '12', sm: '12', xs: '12'
};
export const PAGES = {
	LOSTFOUND: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: LostPetModal,
			Card: GenericCardSquare,
			fetchData: Api.Adv.fetchLostFounds,
			fetchSingle: Api.Adv.fetchSingleLostFound,
			fetchSingleImages: Api.Adv.fetchSingleLostFoundImages,
			deleteSingle: Api.Adv.deleteSingleLostFound,
			searchConfig: [
				[{
					...DefaultFormConfig,
					name: 'city',
					heading: 'City',
					placeholder: 'Please enter city',
					component: SelectFormInput,
					options: City
				}, {
					...DefaultFormConfig,
					name: 'header',
					heading: 'Header',
					placeholder: 'Please enter header',
					component: TextFormInput
				}, {
					...DefaultFormConfig,
					name: 'petType',
					heading: 'Pet Type',
					placeholder: 'Please pet type',
					component: SelectFormInput,
					options: PetTypes
				}, {
					...DefaultFormConfig,
					name: 'sex',
					heading: 'Gender',
					placeholder: 'Please enter genrder',
					component: SelectFormInput,
					options: PetSex
				}, {
					...DefaultFormConfig,
					name: 'color',
					heading: 'Pet Color',
					placeholder: 'Please enter pet color',
					component: SelectFormInput,
					options: PetColor
				}, {
					...DefaultFormConfig,
					name: 'breed',
					heading: 'Breed',
					placeholder: 'Please enter breed',
					component: TextFormInput
				}]
			]
		}
	},
	DONATION: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: LostPetModal,
			Card: GenericCardSquare,
			fetchData: Api.Adv.fetchLostFounds,
			fetchSingle: Api.Adv.fetchSingleLostFound,
			fetchSingleImages: Api.Adv.fetchSingleLostFoundImages,
			deleteSingle: Api.Adv.deleteSingleLostFound,
			searchConfig: [
				[{
					...DefaultFormConfig,
					name: 'city',
					heading: 'City',
					placeholder: 'Please enter city',
					component: SelectFormInput,
					options: City
				}, {
					...DefaultFormConfig,
					name: 'header',
					heading: 'Header',
					placeholder: 'Please enter header',
					requiredMessage: 'Header is required',
					component: TextFormInput
				}, {
					...DefaultFormConfig,
					name: 'petType',
					heading: 'Pet Type',
					placeholder: 'Please pet type',
					component: SelectFormInput,
					options: PetTypes
				}, {
					...DefaultFormConfig,
					name: 'sex',
					heading: 'Gender',
					placeholder: 'Please enter genrder',
					component: SelectFormInput,
					options: PetSex
				}, {
					...DefaultFormConfig,
					name: 'color',
					heading: 'Pet Color',
					placeholder: 'Please enter pet color',
					component: SelectFormInput,
					options: PetColor
				}, {
					...DefaultFormConfig,
					name: 'breed',
					heading: 'Breed',
					placeholder: 'Please enter breed',
					component: TextFormInput
				}]
			]
		}
	},
	ADOPTION: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: LostPetModal,
			Card: GenericCardSquare,
			fetchData: Api.Adv.fetchLostFounds,
			fetchSingle: Api.Adv.fetchSingleLostFound,
			fetchSingleImages: Api.Adv.fetchSingleLostFoundImages,
			deleteSingle: Api.Adv.deleteSingleLostFound,
			searchConfig: [
				[{
					...DefaultFormConfig,
					name: 'city',
					heading: 'City',
					placeholder: 'Please enter city',
					component: SelectFormInput,
					options: City
				}, {
					...DefaultFormConfig,
					name: 'header',
					heading: 'Header',
					placeholder: 'Please enter header',
					requiredMessage: 'Header is required',
					component: TextFormInput
				}, {
					...DefaultFormConfig,
					name: 'petType',
					heading: 'Pet Type',
					placeholder: 'Please pet type',
					component: SelectFormInput,
					options: PetTypes
				}, {
					...DefaultFormConfig,
					name: 'sex',
					heading: 'Gender',
					placeholder: 'Please enter genrder',
					component: SelectFormInput,
					options: PetSex
				}, {
					...DefaultFormConfig,
					name: 'color',
					heading: 'Pet Color',
					placeholder: 'Please enter pet color',
					component: SelectFormInput,
					options: PetColor
				}, {
					...DefaultFormConfig,
					name: 'breed',
					heading: 'Breed',
					placeholder: 'Please enter breed',
					component: TextFormInput
				}]
			]
		}
	},
	CHARITY: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: LostPetModal,
			Card: GenericCardSquare,
			fetchData: Api.Adv.fetchLostFounds,
			fetchSingle: Api.Adv.fetchSingleLostFound,
			fetchSingleImages: Api.Adv.fetchSingleLostFoundImages,
			deleteSingle: Api.Adv.deleteSingleLostFound,
			searchConfig: [
				[{
					...DefaultFormConfig,
					name: 'city',
					heading: 'City',
					placeholder: 'Please enter city',
					component: SelectFormInput,
					options: City
				}, {
					...DefaultFormConfig,
					name: 'header',
					heading: 'Header',
					placeholder: 'Please enter header',
					requiredMessage: 'Header is required',
					component: TextFormInput
				}, {
					...DefaultFormConfig,
					name: 'petType',
					heading: 'Pet Type',
					placeholder: 'Please pet type',
					component: SelectFormInput,
					options: PetTypes
				}, {
					...DefaultFormConfig,
					name: 'sex',
					heading: 'Gender',
					placeholder: 'Please enter genrder',
					component: SelectFormInput,
					options: PetSex
				}, {
					...DefaultFormConfig,
					name: 'color',
					heading: 'Pet Color',
					placeholder: 'Please enter pet color',
					component: SelectFormInput,
					options: PetColor
				}, {
					...DefaultFormConfig,
					name: 'breed',
					heading: 'Breed',
					placeholder: 'Please enter breed',
					component: TextFormInput
				}]
			]
		}
	}
};
