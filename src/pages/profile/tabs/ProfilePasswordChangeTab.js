import Block from '../../../components/styled/block/Block';
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextFormInput, TextInputType } from '../../../components/form/input/TextFormInput';
import FormInput from '../../../components/form/FormInput';

const ProfilePasswordChangeTab=()=>{

	const { register: passwordChange, handleSubmit, formState: { errors } } = useForm({ shouldUseNativeValidation: true });

	const DefaultFormConfig = {
		lg: '12',
		xl: '12',
		sm: '12',
		xs: '12',
		errors: errors,
		register: passwordChange
	};
	const FormConfig = [
		[{
			...DefaultFormConfig,
			name: 'oldPassword',
			heading: 'Old Password',
			placeholder: 'Please enter old password',
			requiredMessage: 'Old password required.',
			component: TextFormInput,
			type: TextInputType.PASSWORD
		}
		],
		[{
			...DefaultFormConfig,
			name: 'newPassword',
			heading: 'New Password',
			placeholder: 'Please new enter password',
			requiredMessage: 'New password required.',
			component: TextFormInput,
			type: TextInputType.PASSWORD
		}
		],
		[{
			...DefaultFormConfig,
			name: 'repeatNewPassword',
			heading: 'Repeat New Password',
			placeholder: 'Please repeat new password',
			requiredMessage: 'New password required.',
			component: TextFormInput,
			type: TextInputType.PASSWORD
		}
		],



	];
	const onSubmit = async (data) => {
		console.log(data);
	};

	return(
		<Block className={'full-tab'}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormInput FormConfig={FormConfig} buttonName={'Change password'} fullButton />
			</form>
		</Block>
	)
}

export default ProfilePasswordChangeTab
