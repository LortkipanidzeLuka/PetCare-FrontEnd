import { Button, Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import Text from '../text/Text';
import { TextType } from '../text/TextType';
import Api from 'src/services/index';
import { useDispatch } from 'react-redux';
import useToast, { ToastType } from '../../hooks/UseToast';
import { loginUser } from '../../storage/Actions';

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
				Log in
			</ModalHeader>
			<ModalBody>
				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Row className={'mrb-medium'}>
							<Col xl='4' lg='4' sm='4' xs='12'>
								<Text text={'Username'} type={TextType.MEDIUM} />
							</Col>
							<Col xl='8' lg='8' sm='8' xs='12'>
								<input
									className={'form-control'} {...auth('username', { required: 'Please enter username.' })}
									name={'username'}
									placeholder={'Enter your username'} type={'text'} required={false} />
								{errors.username &&
									<Text text={errors.username.message} type={TextType.SMALL} classNames={['error-text']} />}
							</Col>
						</Row>
						<Row className={'mrb-medium'}>
							<Col xl='4' lg='4' sm='4' xs='12'>
								<Text text={'Password'} type={TextType.MEDIUM} />
							</Col>
							<Col xl='8' lg='8' sm='8' xs='12'>
								<input
									className={'form-control'} {...auth('password', { required: 'Please enter your password.' })}
									name={'password'}
									placeholder={'Enter your name'} type={'password'} required={false} />
								{errors.password &&
									<Text text={errors.password.message} type={TextType.SMALL} classNames={['error-text']} />}
							</Col>
						</Row>
						<Row>
							<Col>
								<Button type='submit'>log in</Button>
							</Col>
						</Row>
					</form>
				</div>
			</ModalBody>
		</Modal>
	);
};

export default AuthModal;
