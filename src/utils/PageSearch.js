import { SelectFormInput } from '../components/form/input/SelectFormInput';
import { City, PetColor, PetSex, PetTypes } from './Constants';
import { TextFormInput } from '../components/form/input/TextFormInput';

const DefaultFormConfig = {
	lg: '12', xl: '12', sm: '12', xs: '12'
};

export const LOST_AND_FOUND_SEARCH = [
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
