import { Button, Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import Text from '../text/Text';
import { TextType } from '../text/TextType';
import Api from 'src/services/index';
import useToast, { ToastType } from '../../hooks/UseToast';

const RegisterModal = ({ open, closeModal }) => {
	const { register, handleSubmit, formState: { errors } } = useForm({ shouldUseNativeValidation: true });
	const { setMessage: setSuccessMessage } = useToast(ToastType.SUCCESS);
	const { setMessage: setError } = useToast(ToastType.ERROR);

	const onSubmit = async data => {
		try {
			await Api.User.register(data);
			setSuccessMessage('register-success');
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
				<div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Row className={'mrb-medium'}>
							<Col xl='4' lg='4' sm='4' xs='12'>
								<Text text={'First name'} type={TextType.MEDIUM} />
							</Col>
							<Col xl='8' lg='8' sm='8' xs='12'>
								<input
									className={'form-control'} {...register('firstname', { required: 'Please enter your first name.' })}
									name={'firstname'}
									placeholder={'Enter your name'} type={'text'} required={false} />
								{errors.firstname &&
									<Text text={errors.firstname.message} type={TextType.SMALL} classNames={['error-text']} />}
							</Col>
						</Row>
						<Row className={'mrb-medium'}>
							<Col xl='4' lg='4' sm='4' xs='12'>
								<Text text={'Last name'} type={TextType.MEDIUM} />
							</Col>
							<Col xl='8' lg='8' sm='8' xs='12'>
								<input
									className={'form-control'} {...register('lastname', { required: 'Please enter your last name.' })}
									name={'lastname'}
									placeholder={'Enter your name'} type={'text'} required={false} />
								{errors.lastname &&
									<Text text={errors.lastname.message} type={TextType.SMALL} classNames={['error-text']} />}
							</Col>
						</Row>
						<Row className={'mrb-medium'}>
							<Col xl='4' lg='4' sm='4' xs='12'>
								<Text text={'E-mail'} type={TextType.MEDIUM} />
							</Col>
							<Col xl='8' lg='8' sm='8' xs='12'>
								<input className={'form-control'} {...register('username', {
									required: 'Please enter your email.', pattern: {
										value: /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/,
										message: 'Enter valid email'
									}
								})}
											 name={'username'}
											 placeholder={'Enter your email'} type={'email'} required={false} />
								{errors.username &&
									<Text text={errors.username.message} type={TextType.SMALL} classNames={['error-text']} />}
							</Col>
						</Row>
						<Row className={'mrb-medium'}>
							<Col xl='4' lg='4' sm='4' xs='12'>
								<Text text={'Mobile phone'} type={TextType.MEDIUM} />
							</Col>
							<Col xl='8' lg='8' sm='8' xs='12'>
								<input className={'form-control'} {...register('phoneNumber', {
									required: 'phone number is required.',
									pattern: { value: /^5[0-9]{8}$/, message: 'phone number must me 9 digits' }
								})}
											 name={'phoneNumber'}
											 placeholder={'Enter your phone number'} type={'text'} required={false} />
								{errors.phoneNumber &&
									<Text text={errors.phoneNumber.message} type={TextType.SMALL} classNames={['error-text']} />}
							</Col>
						</Row>
						<Row className={'mrb-medium'}>
							<Col xl='4' lg='4' sm='4' xs='12'>
								<Text text={'Gender'} type={TextType.MEDIUM} />
							</Col>
							<Col xl='8' lg='8' sm='8' xs='12' className={'d-flex align-items-center justify-content-between'}>
								<div className={'d-flex align-items-baseline'}>
									<input value='MALE' {...register('sex')} type={'radio'} name={'sex'} defaultChecked={true} />
									<Text text={'Male'} type={TextType.MEDIUM} classNames={['mrl-small']} />
								</div>
								<div className={'d-flex align-items-baseline'}>
									<input value='FEMALE' {...register('sex')} type={'radio'} name={'sex'} />
									<Text text={'Female'} type={TextType.MEDIUM} classNames={['mrl-small']} />
								</div>
							</Col>
						</Row>

						<Row className={'mrb-medium'}>
							<Col xl='4' lg='4' sm='4' xs='12'>
								<Text text={'Password'} type={TextType.MEDIUM} />
							</Col>
							<Col xl='8' lg='8' sm='8' xs='12'>
								<input className={'form-control'} {...register('password', {
									required: 'password is required.'
								})}
											 name={'password'}
											 placeholder={'Enter your password'} type={'password'} required={false} />
								{errors.password &&
									<Text text={errors.password.message} type={TextType.SMALL} classNames={['error-text']} />}
							</Col>
						</Row>
						<Row>
							<Col>
								<Button type='submit'>register</Button>
							</Col>
						</Row>
					</form>
				</div>
			</ModalBody>
		</Modal>
	);
};

export default RegisterModal;
