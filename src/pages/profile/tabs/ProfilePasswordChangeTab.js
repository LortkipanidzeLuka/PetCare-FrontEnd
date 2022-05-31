import Block from '../../../components/styled/block/Block';
import React from 'react';
import { TextFormInput, TextInputType } from '../../../components/form/input/TextFormInput';
import FormInput from '../../../components/form/FormInput';
import useToast, { ToastType } from '../../../hooks/UseToast';
import Api from '../../../services';

const ProfilePasswordChangeTab = () => {

	const { setMessage: setError } = useToast(ToastType.ERROR);
	const { setMessage: setSuccess } = useToast(ToastType.SUCCESS);

	const DefaultFormConfig = {
		lg: '12',
		xl: '12',
		sm: '12',
		xs: '12'
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
		]
	];
	const onSubmit = async (data) => {
		try {
			await Api.Prof.changePassword(data)
			setSuccess('password-changed');
		} catch (error) {
			setError(error);
		}
	};

	return (
		<Block className={'full-tab'}>
			<FormInput FormConfig={FormConfig} buttonName={'Change password'} fullButton onSubmit={onSubmit} resetAfterSubmit/>
		</Block>
	);
};

export default ProfilePasswordChangeTab;
