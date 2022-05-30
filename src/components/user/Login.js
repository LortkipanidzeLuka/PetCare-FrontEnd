import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import Api from 'src/services/index';
import { useDispatch } from 'react-redux';
import useToast, { ToastType } from '../../hooks/UseToast';
import { loginUser } from '../../storage/Actions';
import { TextFormInput, TextInputType } from '../form/input/TextFormInput';
import FormInput from '../form/FormInput';

const AuthModal = ({ open, closeModal }) => {
	const { setMessage: setError } = useToast(ToastType.ERROR);
	const dispatch = useDispatch();

	const onSubmit = async params => {
		try {
			const { data } = await Api.Sec.login(params);
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
		xs: '12'
	};
	const FormConfig = [
		[{
			...DefaultFormConfig,
			name: 'username',
			heading: 'Username',
			placeholder: 'Please enter your e-mail.',
			requiredMessage: 'E-mail is required.',
			component: TextFormInput
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

	return (
		<Modal isOpen={open} toggle={closeModal} className={'small-modal'}>
			<ModalHeader>
				Log In
			</ModalHeader>
			<ModalBody>
				<div>
					<FormInput FormConfig={FormConfig} buttonName={'Log In'} fullButton onSubmit={onSubmit}/>
				</div>
			</ModalBody>
		</Modal>
	);
};

export default AuthModal;
