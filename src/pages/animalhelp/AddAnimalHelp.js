import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import useToast, { ToastType } from '../../hooks/UseToast';
import { City, PetAdType, PetColor, PetSex, PetTypes } from '../../utils/Constants';
import { TextFormInput } from '../../components/form/input/TextFormInput';
import { SelectFormInput } from '../../components/form/input/SelectFormInput';
import { NumberFormInput } from '../../components/form/input/NumberFormInput';
import { FileFormInput } from '../../components/form/input/FileFormInput';
import { TextAreaFormInput } from '../../components/form/input/TextAreaFormInput';
import Api from '../../services';
import FormInput from '../../components/form/FormInput';
import ChipsFormInput from '../../components/form/input/ChipsFormInput';
import { useEffect, useState } from 'react';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';
import MapFormInput from '../../components/form/input/MapFormInput';
import { latLonTranslate } from '../../utils/UtilActions';

const AddAnimalHelp = ({ data, open, closeModal, fetchData }) => {
	const { setMessage: setSuccessMessage } = useToast(ToastType.SUCCESS);
	const { setMessage: setError } = useToast(ToastType.ERROR);
	const [petInfo, setPetInfo] = useState(null);
	const DefaultFormConfig = {
		lg: '5',
		xl: '5',
		sm: '5',
		xs: '12'
	};

	useEffect(() => {
		const fetchSingleData = async () => {
			if (data && data.data && data.data.id) {
				const res = await Api.Help.fetchSingleAnimalHelp({ id: data.data.id }, false);
				setPetInfo(prev => ({ ...prev, ...res.data, 'lat-lon': latLonTranslate.encrypt(res.data) }));
			} else {
				setPetInfo(null);
			}
		};
		const fetchSingleImages = async () => {
			if (data && data.data && data.data.id) {
				const res = await Api.Help.fetchSingleAnimalHelpImages({ id: data.data.id }, false);
				setPetInfo(prev => ({ ...prev, images: res.data }));
			} else {
				setPetInfo(null);
			}
		};
		if (data && data.data && data.data.advertisementType==='ANIMAL_HELP'){
			fetchSingleData();
			fetchSingleImages();
		}
	}, [data]);

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
				component: NumberFormInput,
				minMax: {
					min: {
						value: 0,
						message: 'Value must be more than 0'
					}
				}
			},
			{
				...DefaultFormConfig,
				name: 'ageUntil',
				heading: 'Age until',
				placeholder: 'Please enter age until',
				requiredMessage: 'Age until is required',
				component: NumberFormInput,
				minMax: {
					min: {
						value: 30,
						message: 'Value must be more than 30'
					}
				}
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
				type: 'text',
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
				type: 'select',
				component: ChipsFormInput
			}
		],
		// latitude-longitude
		[
			{
				lg: '12',
				xl: '12',
				sm: '12',
				xs: '12',
				name: 'lat-lon',
				heading: 'Select Location',
				type: 'text',
				component: MapFormInput,
				encrypt: latLonTranslate.encrypt,
				decrypt: latLonTranslate.decrypt
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
				type: 'textarea',
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
				name: 'images',
				heading: 'Images',
				placeholder: 'Please upload images',
				requiredMessage: 'Images are required',
				component: FileFormInput
			}
		]
	];

	const onSubmit = async data => {
		for (let i = 0; i < data.images.length; i++) {
			data.images[i]['isPrimary'] = (i === 0);
		}
		const params = {
			...data,
			advertisementType: 'ANIMAL_HELP',
			...latLonTranslate.decrypt(data['lat-lon'])
		};

		try {
			if (isEditMode()) {
				await Api.Help.updateAnimalHelp(params);
				setSuccessMessage('item-updated');
			} else {
				await Api.Help.createAnimalHelps(params);
				setSuccessMessage('item-added');
			}
			fetchData();
			closeModal();
		} catch (error) {
			setError(error);
		}
	};

	const isEditMode = () => {
		return petInfo;
	};

	return (
		<Modal isOpen={open} toggle={closeModal} className={'big-modal'}>
			<ModalHeader>
				<Text text={`${isEditMode() ? 'Update' : 'Create'} Lost Pet Advertisement`} type={TextType.LARGE} />
			</ModalHeader>
			<ModalBody>
				<FormInput data={petInfo} FormConfig={FormConfig}
									 buttonName={`${!isEditMode() ? 'Create' : 'Update'} Advertisement`} fullButton
									 onSubmit={onSubmit} />
			</ModalBody>
		</Modal>

	);
};

export default AddAnimalHelp;
