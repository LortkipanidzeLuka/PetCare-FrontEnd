import { TextFormInput } from '../../../components/form/input/TextFormInput';
import EmailVerification from '../../../components/form/custom/EmailVerification';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from '../../../storage/user/Selector';
import Text from '../../../components/styled/text/Text';
import { TextType } from '../../../components/styled/text/TextType';
import Api from '../../../services';
import useToast, { ToastType } from '../../../hooks/UseToast';
import { setAuthHeader } from '../../../services/axios';
import UserActions from '../../../storage/user/Store';
import jwt_decode from 'jwt-decode';

const ProfileEmailChange = () => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const { sub } = useSelector(userSelectors.userInfo);
	const dispatch = useDispatch();
	const { setMessage: setErrorMessage } = useToast(ToastType.ERROR);
	const { setMessage: setSuccessMessage } = useToast(ToastType.SUCCESS);
	const { setMessage: setInfoMessage } = useToast(ToastType.INFO);

	const EmailFormConfig = {
		name: 'email',
		heading: 'E-Mail',
		placeholder: 'Please enter e-mail',
		requiredMessage: 'E-mail required.',
		regex: new RegExp('^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$'),
		regexMessage: 'Enter valid e-mail',
		component: TextFormInput
	};


	useEffect(() => {
		if (sub !== null) {
			setEmail(sub);
		}
	}, [sub, setEmail]);

	const validateEmailInput = (email) => {
		let isError = false;
		if (!email) {
			setError(EmailFormConfig.requiredMessage);
			isError = true;
		}
		if (!isError && !email.toUpperCase().match(new RegExp('^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$'))) {
			setError(EmailFormConfig.regexMessage);
			isError = true;
		}
		if (!isError) {
			setError('');
		}
	};

	const sendVerification = async () => {
		if (!error) {
			try {
				await Api.Prof.emailChangeCode({ email });
				setInfoMessage('code-sent');
			} catch (err) {
				setErrorMessage(err);
			}
		}
	};

	const onSubmit = async (params) => {
		if (!error) {
			try {
				const { data } = await Api.Prof.emailChangeVerify({ ...params, email });
				await setAuthHeader(data);
				dispatch(UserActions.actions.loginSuccessAction(jwt_decode(data.accessToken)));
				setSuccessMessage('email-changed');
			} catch (err) {
				setErrorMessage(err);
			}
		}
	};

	return (
		<>
			<form>
				<Row className={'pl-small pr-small'}>
					<Col>
						<Row className={'mrb-medium'}>
							<Text text={EmailFormConfig.heading} type={TextType.MEDIUM} classNames={['mrb-small']} />
							<input
								className={'form-control'}
								placeholder={'Please enter email'}
								type={'text'}
								value={email}
								onChange={(value) => {
									validateEmailInput(value.target.value);
									setEmail(value.target.value);
								}}
							/>
							{error && <Text text={error} type={TextType.SMALL} classNames={['error-text']} />}
						</Row>
					</Col>
				</Row>
			</form>
			<EmailVerification
				sendVerification={sendVerification}
				onSubmit={onSubmit}
			/>
		</>
	);
};

export default ProfileEmailChange;
