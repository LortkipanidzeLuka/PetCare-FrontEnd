import { useForm } from 'react-hook-form';
import { TextFormInput } from '../../components/form/input/TextFormInput';
import EmailVerification from '../../components/form/custom/EmailVerification';
import React from 'react';

const ProfileEmailChange = () => {
	const { register: infoChange, handleSubmit, formState: { errors } } = useForm({ shouldUseNativeValidation: true });

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
				<TextFormInput {...EmailFormConfig} />
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
