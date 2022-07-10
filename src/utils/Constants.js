const ANIMAL_HELP = "ANIMAL_HELP";
const PET_SERVICE = "PET_SERVICE";
const DONATION = "DONATION";


export const PetTypes = [
	{ label: 'DOG', value: 'DOG' },
	{ label: 'CAT', value: 'CAT' }
];

export const PetTypesForSearch = [
	{ label: 'DOG', value: 'DOG' },
	{ label: 'CAT', value: 'CAT' }
];


export const AdvTypesForAnimalHelp = [
	{ label: 'LOST', value: 'LOST' },
	{ label: 'FOUND', value: 'FOUND' },
	{ label: 'ADOPTION', value: 'ADOPTION'}
];


export const City = [
	{ label: 'TBILISI', value: 'TBILISI' },
	{ label: 'BATUMI', value: 'BATUMI' },
	{ label: 'RUSTAVI', value: 'RUSTAVI' },
	{ label: 'KUTAISI', value: 'KUTAISI' }
];

export const PetColor = [
	{ label: 'WHITE', value: 'WHITE' },
	{ label: 'BLACK', value: 'BLACK' }
];


export const PetAdType = [
	{ label: 'LOST', value: 'LOST' },
	{ label: 'FOUND', value: 'FOUND' },
	{ label: 'ADOPTION', value: 'ADOPTION'}
];

export const PetSex = [
	{ label: 'MALE', value: 'MALE' },
	{ label: 'FEMALE', value: 'FEMALE' }
];

export const PageTypesOptions = [
	{ value: ANIMAL_HELP, label: 'Animals Needing Help' },
	{ value: PET_SERVICE, label: 'Pet Service' },
	{ value: DONATION, label: 'Donation' },
];


export const PetServiceOptions = [
	{ value: 'PET_WATCH', label: 'Pet Watch' },
	{ value: 'GROOMING', label: 'Grooming' }
];

export const PetServiceOptionsMap = {
	PET_WATCH: 'Pet Watch',
	GROOMING: 'Grooming',
	PET_SERVICE:'Pet Service'
}

export const DonationOptions = [
	{ value: 'NEED_DONATION', label: 'Need Donation' },
	{ value: 'ABLE_TO_DONATE', label: 'Able To Donate' }
]

export const DonationOptionsMap = {
	NEED_DONATION: 'I Need Donation',
	ABLE_TO_DONATE: 'I Am Able To Donate',
	PET_SERVICE:'Pet Service'
}

export const PetServiceColors = {
	PET_WATCH:'#50a5f1',
	GROOMING: '#989898',
	PET_SERVICE:'#989898'

}

export const DonationColors = {
	NEED_DONATION:'#f46a6a',
	ABLE_TO_DONATE: '#34c38f',
	DONATION:'#34c38f'

}

export const TagListColorPool = [
	'tag-success',
	'tag-danger',
	'tag-warning',
	'tag-info',
	'tag-info-dark',
	'tag-info-faint',
	'tag-text-purple',
	'tag-text-grey'
];
export const ErrorUniversal = 'universal';
