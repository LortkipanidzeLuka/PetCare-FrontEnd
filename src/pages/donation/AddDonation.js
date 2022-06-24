import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';
import useToast, { ToastType } from '../../hooks/UseToast';
import { useEffect, useState } from 'react';
import Api from '../../services';
import { latLonTranslate } from '../../utils/UtilActions';
import FormInput from '../../components/form/FormInput';
import ChipsFormInput from '../../components/form/input/ChipsFormInput';
import MapFormInput from '../../components/form/input/MapFormInput';
import { TextAreaFormInput } from '../../components/form/input/TextAreaFormInput';
import { FileFormInput } from '../../components/form/input/FileFormInput';
import { SelectFormInput } from '../../components/form/input/SelectFormInput';
import { City, DonationOptions, PetTypesForSearch } from '../../utils/Constants';
import { TextFormInput } from '../../components/form/input/TextFormInput';

const AddDonation = ({ data, open, closeModal, fetchData }) => {
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
				const res = await Api.Donat.fetchSingleDonations({ id: data.data.id }, false);
				setPetInfo(prev => ({ ...prev, ...res.data, 'lat-lon': latLonTranslate.encrypt(res.data) }));
			} else {
				setPetInfo(null);
			}
		};
		const fetchSingleImages = async () => {
			if (data && data.data && data.data.id) {
				const res = await Api.Donat.fetchSingleDonationsImages({ id: data.data.id }, false);
				setPetInfo(prev => ({ ...prev, images: res.data }));
			} else {
				setPetInfo(null);
			}
		};
		if (data && data.data && data.data.advertisementType === 'DONATION') {
			fetchSingleData();
			fetchSingleImages();
		}
	}, [data]);

	const FormConfig = [
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
		[
			{
				...DefaultFormConfig,
				name: 'donationAdvertisementType',
				heading: 'Donation Type',
				placeholder: 'Please enter donation type',
				requiredMessage: 'Donation type is required',
				component: SelectFormInput,
				options: DonationOptions
			},
			{
				...DefaultFormConfig,
				name: 'applicablePetList',
				heading: 'Applicable Pets',
				placeholder: 'Please enter applicable pets',
				requiredMessage: 'Applicable pets is required',
				component: ChipsFormInput,
				options: PetTypesForSearch
			},
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
			advertisementType: 'DONATION',
			...latLonTranslate.decrypt(data['lat-lon'])
		};
		try {
			if (isEditMode()) {
				await Api.Donat.updateDonations(params);
				setSuccessMessage('item-updated');
			} else {
				await Api.Donat.createDonations(params);
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
				<Text text={`Create Donation Advertisement`} type={TextType.LARGE} />
			</ModalHeader>
			<ModalBody>
				<FormInput data={petInfo} FormConfig={FormConfig}
									 buttonName={`${!isEditMode() ? 'Create' : 'Update'} Advertisement`} fullButton
									 onSubmit={onSubmit} />
			</ModalBody>

		</Modal>
	);
};

export default AddDonation;
