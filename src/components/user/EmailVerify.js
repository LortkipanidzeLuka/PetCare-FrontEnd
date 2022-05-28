import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from '../../storage/user/Selector';
import { useCallback, useEffect, useState } from 'react';
import Api from 'src/services/index';
import useToast, { ToastType } from '../../hooks/UseToast';
import Text from '../styled/text/Text';
import { useForm } from 'react-hook-form';
import { TextType } from '../styled/text/TextType';
import { refreshToken } from '../../services/axios';
import { updateUserStore } from '../../storage/Actions';

const EmailVerify = ({ isOpen }) => {
	let user = useSelector(userSelectors.userInfo);
	const dispatch = useDispatch();

	const { register: verification, handleSubmit, formState: { errors } } = useForm({ shouldUseNativeValidation: true });
	const { setMessage: setError } = useToast(ToastType.ERROR);
	const [loading, setLoading] = useState(false);

	const sendVerification = useCallback(async ()=> {
		setLoading(true);
		try {
			await Api.User.sendVerification();
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	}, [setError]);

	const onSubmit = async (data) => {
		try {
			await Api.User.submitVerification(data);
			await refreshToken();
			updateUserStore({ dispatch });
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		if (isOpen && user && user.sub) {
			sendVerification();
		}
	}, [isOpen, user, sendVerification]);


	return (

		<Modal isOpen={isOpen && user && user.sub !== undefined && user.sub !== null}>
			<ModalHeader>
				Verify E-mail
			</ModalHeader>
			<ModalBody>
				{loading ? (
					<div>
						<Text text={`Code is being sent`} type={TextType.SMALL} classNames={['faint-text']} />
					</div>
				) : (
					<div>
						<div className={'d-flex justify-content-between'}>
							<Text text={`Code sent to email: `} type={TextType.MEDIUM} classNames={['faint-text']} />
							<Text text={`${user.sub}`} type={TextType.MEDIUM} />
						</div>
						<div className={'mrt-medium'}>
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className={'d-flex'}>
									<input className={'form-control'}
												 type={'text'} {...verification('code', {
										required: 'Please enter code', pattern: {
											value: /\d{6}/,
											message: 'Must be 6 digits'
										}
									})} />
									{errors.code &&
										<Text text={errors.code.message} type={TextType.SMALL} classNames={['error-text']} />}
									<Button onClick={sendVerification} className={'mrl-medium'}>
										Resend
									</Button>
								</div>

								<Button type={'submit'} className={'mrt-medium'}>
									Submit
								</Button>
							</form>
						</div>
					</div>
				)}
			</ModalBody>
		</Modal>
	);
};

export default EmailVerify;
