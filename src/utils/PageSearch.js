import { SelectFormInput } from '../components/form/input/SelectFormInput';
import {
	AdvTypesForLostFound,
	City,
	PageTypesOptions,
	PetColor,
	PetServiceOptions,
	PetSex,
	PetTypesForSearch
} from './Constants';
import { TextFormInput } from '../components/form/input/TextFormInput';

const DefaultFormConfig = {
	lg: '12', xl: '12', sm: '12', xs: '12'
};

const HorizontalFormConfig = {
	lg: '10', xl: '10', sm: '12', xs: '12'
};

export const LOST_AND_FOUND_SEARCH = {
	fields: [
		[{
			...DefaultFormConfig,
			name: 'type',
			heading: 'Type',
			placeholder: 'Please enter type',
			component: SelectFormInput,
			options: AdvTypesForLostFound
		}, {
			...DefaultFormConfig,
			name: 'city',
			heading: 'City',
			placeholder: 'Please enter city',
			component: SelectFormInput,
			options: City
		}, {
			...DefaultFormConfig,
			name: 'search',
			heading: 'Header',
			placeholder: 'Please enter header',
			component: TextFormInput
		}, {
			...DefaultFormConfig,
			name: 'petType',
			heading: 'Pet Type',
			placeholder: 'Please pet type',
			component: SelectFormInput,
			options: PetTypesForSearch
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
	],
	initialData: {
		type: 'LOST'
	}
};

export const PET_SERVICE_SEARCH = {
	fields:[
		[{
			...DefaultFormConfig,
			name: 'type',
			heading: 'Pet Service',
			placeholder: 'Please enter pet service',
			component: SelectFormInput,
			options: PetServiceOptions
		}],
	],
	initialData: {
		type: 'PET_WATCH'
	}
}

export const PROFILE_SEARCH = {
	fields: [
		[{
			...HorizontalFormConfig,
			name: 'type',
			heading: 'Advertisement Type',
			placeholder: 'Select Advertisement Type',
			component: SelectFormInput,
			options: PageTypesOptions
		}],
		[{
			...HorizontalFormConfig,
			name: 'search',
			heading: 'Title or Description',
			placeholder: 'Enter Title or Description',
			component: TextFormInput
		}]
	],
	initialData: {
		type: 'LOST_FOUND'
	}
};
