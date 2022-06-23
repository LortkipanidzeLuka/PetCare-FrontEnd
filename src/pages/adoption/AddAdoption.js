import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';
import useToast, { ToastType } from '../../hooks/UseToast';
import { useState } from 'react';
import { useEffect } from 'react';
import Api from '../../services';
import { latLonTranslate } from '../../utils/UtilActions';
import { SelectFormInput } from '../../components/form/input/SelectFormInput';
import { City, PetColor, PetSex, PetTypes } from '../../utils/Constants';
import { TextFormInput } from '../../components/form/input/TextFormInput';
import { NumberFormInput } from '../../components/form/input/NumberFormInput';
import FormInput from '../../components/form/FormInput';
import { TextAreaFormInput } from '../../components/form/input/TextAreaFormInput';
import { FileFormInput } from '../../components/form/input/FileFormInput';
import ChipsFormInput from '../../components/form/input/ChipsFormInput';
import MapFormInput from '../../components/form/input/MapFormInput';

const AddAdoption = ({ data, open, closeModal, fetchData }) => {
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
				const res = await Api.Adopt.fetchSingleAdoption({ id: data.data.id }, false);
				setPetInfo(prev => ({ ...prev, ...res.data, 'lat-lon': latLonTranslate.encrypt(res.data) }));
			} else {
				setPetInfo(null);
			}
		};
		const fetchSingleImages = async () => {
			if (data && data.data && data.data.id) {
				const res = await Api.Adopt.fetchSingleAdoptionImages({ id: data.data.id }, false);
				setPetInfo(prev => ({ ...prev, images: res.data }));
			} else {
				setPetInfo(null);
			}
		};
		if (data && data.data && data.data.advertisementType==='ADOPTION') {
			fetchSingleData();
			fetchSingleImages();
		}
	}, [data]);


	const FormConfig = [
		// city-header
			[
				{
					...DefaultFormConfig,
					name: 'header',
					heading: 'Header',
					placeholder: 'Please enter header',
					requiredMessage: 'Header is required',
					component: TextFormInput
				},
				{
					...DefaultFormConfig,
					name: 'breed',
					heading: 'Pet Breed',
					placeholder: 'Please enter breed information',
					type: 'text',
					requiredMessage: 'Breed information is required',
					component: TextFormInput
				}
			],
			[{
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
		],
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
	];

	const onSubmit = async data => {
		for (let i = 0; i < data.images.length; i++) {
			data.images[i]['isPrimary'] = (i === 0);
		}
		const params = {
			...data,
			advertisementType: 'ADOPTION',
			...latLonTranslate.decrypt(data['lat-lon'])
		};

		try {
			if (isEditMode()) {
				await Api.Adopt.updateAdoption(params);
				setSuccessMessage('item-updated');
			} else {
				await Api.Adopt.createAdoption(params);
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
				<Text text={`${isEditMode() ? 'Update' : 'Create'} Adoption Advertisement`} type={TextType.LARGE} />
			</ModalHeader>
			<ModalBody>
				<FormInput data={petInfo} FormConfig={FormConfig}
									 buttonName={`${!isEditMode() ? 'Create' : 'Update'} Advertisement`} fullButton
									 onSubmit={onSubmit} />
			</ModalBody>
		</Modal>
	);
};

export default AddAdoption;
