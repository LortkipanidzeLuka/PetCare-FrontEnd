import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useForm } from 'react-hook-form';
import Api from 'src/services/index';
import useToast, { ToastType } from '../../hooks/UseToast';
import FormInput from '../form/FormInput';
import { PetSex } from '../../utils/Constants';
import { TextFormInput, TextInputType } from '../form/TextFormInput';
import { RadioFormInput } from '../form/RadioFormInput';

const RegisterModal = ({ open, closeModal }) => {
	const { register, handleSubmit, formState: { errors } } = useForm({ shouldUseNativeValidation: true });
	const { setMessage: setSuccessMessage } = useToast(ToastType.SUCCESS);
	const { setMessage: setError } = useToast(ToastType.ERROR);
	const DefaultFormConfig = {
		lg: '12',
		xl: '12',
		sm: '12',
		xs: '12',
		errors: errors,
		register: register
	};
	const FormConfig = [
		[{
			...DefaultFormConfig,
			name: 'firstname',
			heading: 'First name',
			placeholder: 'Please enter your first name.',
			requiredMessage: 'First name is required.',
			component: TextFormInput
		}
		],
		[{
			...DefaultFormConfig,
			name: 'lastname',
			heading: 'Last Name',
			placeholder: 'Please enter your last name.',
			requiredMessage: 'Last name is required.',
			component: TextFormInput
		}
		],
		[{
			...DefaultFormConfig,
			name: 'username',
			heading: 'E-Mail',
			placeholder: 'Please enter your e-mail.',
			requiredMessage: 'E-mail is required.',
			regex: /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/,
			regexMessage: 'Enter valid email',
			component: TextFormInput
		}
		],
		[{
			...DefaultFormConfig,
			name: 'phoneNumber',
			heading: 'Mobile phone',
			placeholder: 'Please enter mobile number',
			requiredMessage: 'Mobile number required.',
			regex: /^5[0-9]{8}$/,
			regexMessage: 'Enter valid phone number',
			component: TextFormInput
		}
		],
		[{
			...DefaultFormConfig,
			name: 'sex',
			heading: 'Sex',
			placeholder: 'Please enter sex',
			requiredMessage: 'Sex number required.',
			component: RadioFormInput,
			options: PetSex
		}
		],
		[{
			...DefaultFormConfig,
			name: 'password',
			heading: 'Password',
			placeholder: 'Please enter password',
			requiredMessage: 'Password required.',
			component: TextFormInput,
			type: TextInputType.PASSWORD
		}
		]
	];

	const onSubmit = async data => {
		try {
			await Api.User.register(data);
			setSuccessMessage('register-success');
			closeModal();
		} catch (error) {
			setError(error);
		}
	};

	return (
		<Modal isOpen={open} toggle={closeModal} className={'small-modal'}>
			<ModalHeader>
				Register
			</ModalHeader>
			<ModalBody>
				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormInput FormConfig={FormConfig} buttonName={'Register'} fullButton />
					</form>
				</div>
			</ModalBody>
		</Modal>
	);
};

export default RegisterModal;
