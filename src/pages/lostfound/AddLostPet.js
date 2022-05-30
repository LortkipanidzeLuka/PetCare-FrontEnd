import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useForm } from 'react-hook-form';
import useToast, { ToastType } from '../../hooks/UseToast';
import { City, PetAdType, PetColor, PetSex, PetTypes } from '../../utils/Constants';
import { TextFormInput } from '../../components/form/input/TextFormInput';
import { SelectFormInput } from '../../components/form/input/SelectFormInput';
import { NumberFormInput } from '../../components/form/input/NumberFormInput';
import { FileFormInput } from '../../components/form/input/FileFormInput';
import { TextAreaFormInput } from '../../components/form/input/TextAreaFormInput';
import Api from '../../services';
import { TransformImageArrToBase64 } from '../../utils/UtilActions';
import FormInput from '../../components/form/FormInput';
import ChipsFormInput from '../../components/form/input/ChipsFormInput';
import { useState } from 'react';

const AddLostPet = ({ open, closeModal }) => {
	const { register: createAdv, handleSubmit, formState: { errors }, setValue } = useForm({ shouldUseNativeValidation: true });
	const { setMessage: setSuccessMessage } = useToast(ToastType.SUCCESS);
	const { setMessage: setError } = useToast(ToastType.ERROR);
	const DefaultFormConfig = {
		lg: '5',
		xl: '5',
		sm: '5',
		xs: '12',
		errors: errors,
		register: createAdv,
		setValue: setValue
	};
	const [tags, setTags] = useState([]);

	const FormConfig = [
		// city-header
		[
			{
				...DefaultFormConfig,
				name: 'city',
				heading: 'City',
				placeholder: 'Please enter city',
				requiredMessage: 'City is required',
				component: SelectFormInput,
				options: City
			},
			{
				...DefaultFormConfig,
				name: 'header',
				heading: 'Header',
				placeholder: 'Please enter header',
				requiredMessage: 'Header is required',
				component: TextFormInput
			}
		],
		// latitude-longitude
		[
			{
				...DefaultFormConfig,
				name: 'latitude',
				heading: 'Latitude',
				placeholder: 'Please enter latitude',
				requiredMessage: 'Latitude is required',
				component: NumberFormInput
			},
			{
				...DefaultFormConfig,
				name: 'longitude',
				heading: 'Longitude',
				placeholder: 'Please enter longitude',
				requiredMessage: 'Longitude is required',
				component: NumberFormInput
			}
		],
		// petType-petColor
		[
			{
				...DefaultFormConfig,
				name: 'petType',
				heading: 'Pet Type',
				placeholder: 'Please enter pet type',
				requiredMessage: 'Pet type is required',
				component: SelectFormInput,
				options: PetTypes
			},
			{
				...DefaultFormConfig,
				name: 'color',
				heading: 'Pet Color',
				placeholder: 'Please enter pet color',
				requiredMessage: 'Pet color is required',
				component: SelectFormInput,
				options: PetColor
			}
		],
		// ageFrom-ageUntil
		[
			{
				...DefaultFormConfig,
				name: 'ageFrom',
				heading: 'Age from',
				placeholder: 'Please enter age from',
				requiredMessage: 'Age from is required',
				component: NumberFormInput
			},
			{
				...DefaultFormConfig,
				name: 'ageUntil',
				heading: 'Age until',
				placeholder: 'Please enter age until',
				requiredMessage: 'Age until is required',
				component: NumberFormInput
			}
		],
		// addType-petSex
		[
			{
				...DefaultFormConfig,
				name: 'type',
				heading: 'Type',
				placeholder: 'Please enter type',
				requiredMessage: 'Type is required',
				component: SelectFormInput,
				options: PetAdType
			},
			{
				...DefaultFormConfig,
				name: 'sex',
				heading: 'Pet Sex',
				placeholder: 'Please enter pet sex',
				requiredMessage: 'Pet sex is required',
				component: SelectFormInput,
				options: PetSex
			}
		],
		[
			{
				lg: '12',
				xl: '12',
				sm: '12',
				xs: '12',
				name: 'breed',
				heading: 'Pet Breed',
				placeholder: 'Please enter breed information',
				errors: errors,
				type: 'text',
				register: createAdv,
				requiredMessage: 'Breed information is required',
				component: TextFormInput
			}
		],
		[
			{
				lg: '12',
				xl: '12',
				sm: '12',
				xs: '12',
				name: 'tags',
				heading: 'Tags',
				placeholder: 'Please enter tag and press enter',
				errors: errors,
				type: 'select',
				component: ChipsFormInput,
				setChips: setTags
			}
		],
		[
			{
				lg: '12',
				xl: '12',
				sm: '12',
				xs: '12',
				name: 'description',
				heading: 'Description',
				placeholder: 'Please enter description',
				errors: errors,
				type: 'textarea',
				register: createAdv,
				requiredMessage: 'Description is required',
				component: TextAreaFormInput
			}
		],
		[
			{
				lg: '12',
				xl: '12',
				sm: '12',
				xs: '12',
				name: 'picture',
				heading: 'Pictures',
				placeholder: 'Please upload picture',
				errors: errors,
				register: createAdv,
				requiredMessage: 'Pictures are required',
				component: FileFormInput
			}
		]
	];

	const onSubmit = async data => {
		const images = await TransformImageArrToBase64(data.picture);
		const params = {
			...data,
			advertisementType: 'LOST_FOUND',
			tags: tags,
			images: images
		};
		try {
			await Api.Lost.createLostFound(params);
			setSuccessMessage('item-added');
			closeModal();
		} catch (error) {
			setError(error);
		}
	};

	return (
		<Modal isOpen={open} toggle={closeModal} className={'big-modal'}>
			<ModalHeader>
				Create Lost Pet Announcement
			</ModalHeader>
			<ModalBody>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormInput FormConfig={FormConfig} buttonName={'Create Announcement'} fullButton />
				</form>
			</ModalBody>
		</Modal>

	);
};

export default AddLostPet;
