import { Button, Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import Text from '../text/Text';
import { TextType } from '../text/TextType';

const RegisterModal = ({ open, closeModal }) => {
	const { register, handleSubmit, formState: { errors } } = useForm({ shouldUseNativeValidation: true });
	const onSubmit = async data => {
		//TODO
		console.log(data);
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
									className={'form-control'} {...register('firstName', { required: 'Please enter your first name.' })}
									name={'firstName'}
									placeholder={'Enter your name'} type={'text'} required={false} />
								{errors.firstName &&
									<Text text={errors.firstName.message} type={TextType.SMALL} classNames={['error-text']} />}
							</Col>
						</Row>
						<Row className={'mrb-medium'}>
							<Col xl='4' lg='4' sm='4' xs='12'>
								<Text text={'Last name'} type={TextType.MEDIUM} />
							</Col>
							<Col xl='8' lg='8' sm='8' xs='12'>
								<input
									className={'form-control'} {...register('lastName', { required: 'Please enter your last name.' })}
									name={'lastName'}
									placeholder={'Enter your name'} type={'text'} required={false} />
								{errors.lastName &&
									<Text text={errors.lastName.message} type={TextType.SMALL} classNames={['error-text']} />}
							</Col>
						</Row>
						<Row className={'mrb-medium'}>
							<Col xl='4' lg='4' sm='4' xs='12'>
								<Text text={'Email'} type={TextType.MEDIUM} />
							</Col>
							<Col xl='8' lg='8' sm='8' xs='12'>
								<input className={'form-control'} {...register('email', { required: 'Please enter your email.' })}
											 name={'email'}
											 placeholder={'Enter your email'} type={'email'} required={false} />
								{errors.email &&
									<Text text={errors.email.message} type={TextType.SMALL} classNames={['error-text']} />}
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
