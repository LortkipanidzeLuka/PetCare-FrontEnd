import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useForm } from 'react-hook-form';
import Api from 'src/services/index';
import { useDispatch } from 'react-redux';
import useToast, { ToastType } from '../../hooks/UseToast';
import { loginUser } from '../../storage/Actions';
import { TextFormInput, TextInputType } from '../form/TextFormInput';
import FormInput from '../form/FormInput';

const AuthModal = ({ open, closeModal }) => {
	const { register: auth, handleSubmit, formState: { errors } } = useForm({ shouldUseNativeValidation: true });
	const { setMessage: setError } = useToast(ToastType.ERROR);
	const dispatch = useDispatch();

	const onSubmit = async params => {
		try {
			const { data } = await Api.User.login(params);
			await loginUser({ data, dispatch });
			closeModal();
		} catch (error) {
			setError(error);
		}
	};
	const DefaultFormConfig = {
		lg: '12',
		xl: '12',
		sm: '12',
		xs: '12',
		errors: errors,
		register: auth
	};
	const FormConfig = [
		{
			double: false,
			first: {
				...DefaultFormConfig,
				name: 'username',
				heading: 'Username',
				placeholder: 'Please enter your e-mail.',
				requiredMessage: 'E-mail is required.',
				component: TextFormInput
			}, second: {}
		},
		{
			double: false,
			first: {
				...DefaultFormConfig,
				name: 'password',
				heading: 'Password',
				placeholder: 'Please enter password',
				requiredMessage: 'Password required.',
				component: TextFormInput,
				type:TextInputType.PASSWORD
			}
		},
	];

	return (
		<Modal isOpen={open} toggle={closeModal} className={'small-modal'}>
			<ModalHeader>
				Log In
			</ModalHeader>
			<ModalBody>
				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormInput FormConfig={FormConfig} buttonName={'Log In'} fullButton/>
					</form>
				</div>
			</ModalBody>
		</Modal>
	);
};

export default AuthModal;
