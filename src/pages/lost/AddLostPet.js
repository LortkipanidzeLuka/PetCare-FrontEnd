import { Button, Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import useToast, { ToastType } from '../../hooks/UseToast';
import { City, PetAdType, PetColor, PetSex, PetTypes } from '../../utils/Constants';
import { TextFormInput } from '../../components/form/TextFormInput';
import { SelectFormInput } from '../../components/form/SelectFormInput';
import { NumberFormInput } from '../../components/form/NumberFormInput';
import { FileFormInput } from '../../components/form/FileFormInput';
import { TextAreaFormInput } from '../../components/form/TextAreaFormInput';
import Api from '../../services';
import { TransformImageArrToBase64 } from '../../utils/UtilActions';

const AddLostPet = ({ open, closeModal }) => {
	const { register: createAdv, handleSubmit, formState: { errors } } = useForm({ shouldUseNativeValidation: true });
	const { setMessage: setSuccessMessage } = useToast(ToastType.SUCCESS);
	const { setMessage: setError } = useToast(ToastType.ERROR);
	const DefaultFormConfig = {
		lg: '5',
		xl: '5',
		sm: '5',
		xs: '12',
		name: 'city',
		heading: 'City',
		errors: errors,
		register: createAdv
	};

	const FormConfig = [
		// city-header
		{
			double: true,
			first: {
				...DefaultFormConfig,
				placeholder: 'Please enter city',
				requiredMessage: 'City is required',
				component: SelectFormInput,
				options: City
			},
			second: {
				...DefaultFormConfig,
				name: 'header',
				heading: 'Header',
				placeholder: 'Please enter header',
				requiredMessage: 'Header is required',
				component: TextFormInput
			}
		},
		// latitude-longitude
		{
			double: true,
			first: {
				...DefaultFormConfig,
				name: 'latitude',
				heading: 'Latitude',
				placeholder: 'Please enter latitude',
				requiredMessage: 'Latitude is required',
				component: NumberFormInput
			},
			second: {
				...DefaultFormConfig,
				name: 'longitude',
				heading: 'Longitude',
				placeholder: 'Please enter longitude',
				requiredMessage: 'Longitude is required',
				component: NumberFormInput
			}
		},
		// petType-petColor
		{
			double: true,
			first: {
				...DefaultFormConfig,
				name: 'petType',
				heading: 'Pet Type',
				placeholder: 'Please enter pet type',
				requiredMessage: 'Pet type is required',
				component: SelectFormInput,
				options: PetTypes
			},
			second: {
				...DefaultFormConfig,
				name: 'petColor',
				heading: 'Pet Color',
				placeholder: 'Please enter pet color',
				requiredMessage: 'Pet color is required',
				component: SelectFormInput,
				options: PetColor
			}
		},
		// ageFrom-ageUntil
		{
			double: true,
			first: {
				...DefaultFormConfig,
				name: 'ageFrom',
				heading: 'Age from',
				placeholder: 'Please enter age from',
				requiredMessage: 'Age from is required',
				component: NumberFormInput
			},
			second: {
				...DefaultFormConfig,
				name: 'ageUntil',
				heading: 'Age until',
				placeholder: 'Please enter age until',
				requiredMessage: 'Age until is required',
				component: NumberFormInput
			}
		},
		// addType-petSex
		{
			double: true,
			first: {
				...DefaultFormConfig,
				name: 'type',
				heading: 'Type',
				placeholder: 'Please enter type',
				requiredMessage: 'Type is required',
				component: SelectFormInput,
				options: PetAdType
			},
			second: {
				...DefaultFormConfig,
				name: 'sex',
				heading: 'Pet Sex',
				placeholder: 'Please enter pet sex',
				requiredMessage: 'Pet sex is required',
				component: SelectFormInput,
				options: PetSex
			}
		},
		{
			double: false,
			first: {
				lg: '12',
				xl: '12',
				sm: '12',
				xs: '12',
				name: 'description',
				heading: 'Description',
				placeholder: 'Please enter description',
				errors: errors,
				type:'textarea',
				register: createAdv,
				requiredMessage: 'Description is required',
				component: TextAreaFormInput
			},
			second: {}
		},
		{
			double: false,
			first: {
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
			},
			second: {}
		}
	];

	const onSubmit = async data => {
		const images = await TransformImageArrToBase64(data.picture);
		const params = {
			...data,
			tags:['tag1', 'tag2'],
			images: images
		}
		try {
			await Api.Adv.createAdv(params);
			setSuccessMessage('item-added');
			closeModal();
		} catch (error) {
			if (error && error.errorCode) {
				setError(error.errorCode);
			} else {
				setError('universal');
			}
		}
	};

	return (
		<Modal isOpen={open} toggle={closeModal} className={'small-modal'}>
			<ModalHeader>
				register
			</ModalHeader>
			<ModalBody>
				<form onSubmit={handleSubmit(onSubmit)}>
					{FormConfig.map((value, index) => {
						const FirstFormComponent = value.first.component;
						const SecondFormComponent = value.second.component;

						if (!value.double) {
							return (
								<Row className={'d-flex p-small'} key={index}>
									<FirstFormComponent {...value.first} />
								</Row>
							);
						} else {
							return (
								<Row className={'d-flex p-small'} key={index}>
									<FirstFormComponent {...value.first} />
									<Col xl={'2'} lg={'2'} sm={'2'} xs={'2'}/>
									<SecondFormComponent {...value.second} />
								</Row>
							);
						}
					})}
					<Button type={'submit'}>Submit</Button>
				</form>
			</ModalBody>
		</Modal>

	);
};

export default AddLostPet;
