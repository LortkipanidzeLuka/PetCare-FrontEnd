import { useForm } from 'react-hook-form';
import { TextFormInput } from '../../../components/form/input/TextFormInput';
import EmailVerification from '../../../components/form/custom/EmailVerification';
import React from 'react';
import { Row } from 'reactstrap';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../../storage/user/Selector';

const ProfileEmailChange = () => {
	const {
		register: infoChange,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({ shouldUseNativeValidation: true });
	const { sub } = useSelector(userSelectors.userInfo);
	useEffect(() => {
		reset({ 'email': sub });
	}, [sub, reset]);

	const EmailDefaultFormConfig = {
		lg: '12',
		xl: '12',
		sm: '12',
		xs: '12',
		errors: errors,
		register: infoChange
	};


	const EmailFormConfig = {

		...EmailDefaultFormConfig,
		name: 'email',
		heading: 'E-Mail',
		placeholder: 'Please enter e-mail',
		requiredMessage: 'E-mail required.',
		regex: /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/,
		regexMessage: 'Enter valid e-mail',
		component: TextFormInput

	};
	const onSubmit = async (data) => {
		console.log(data);
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Row className={'pl-small pr-small'}>
					<TextFormInput {...EmailFormConfig} />
				</Row>
			</form>
			<EmailVerification
				sendVerification={() => {
					//		TODO
				}}
				onSubmit={() => {
					//	TODO
				}}
			/>
		</>
	);
};

export default ProfileEmailChange;
