import { useForm } from 'react-hook-form';
import { TextFormInput } from '../../../components/form/input/TextFormInput';
import { RadioFormInput } from '../../../components/form/input/RadioFormInput';
import { PetSex } from '../../../utils/Constants';
import FormInput from '../../../components/form/FormInput';
import React, { useEffect } from 'react';
import useToast, { ToastType } from '../../../hooks/UseToast';
import Api from '../../../services';
import { refreshToken } from '../../../services/axios';
import { useDispatch } from 'react-redux';
import { updateUserStore } from '../../../storage/Actions';

const ProfileInfoChange = ({ data }) => {
	const { register: infoChange, handleSubmit, formState: { errors }, reset } = useForm({
		shouldUseNativeValidation: true
	});
	const { setMessage: setError } = useToast(ToastType.ERROR);
	const { setMessage: setSuccess } = useToast(ToastType.SUCCESS);

	const dispatch = useDispatch();

	const InfoDefaultFormConfig = {
		lg: '12',
		xl: '12',
		sm: '12',
		xs: '12',
		errors: errors,
		register: infoChange
	};
	const InfoFormConfig = [
		[{
			...InfoDefaultFormConfig,
			name: 'firstname',
			heading: 'First name',
			placeholder: 'Please enter your first name.',
			requiredMessage: 'First name is required.',
			component: TextFormInput
		}
		],
		[{
			...InfoDefaultFormConfig,
			name: 'lastname',
			heading: 'Last Name',
			placeholder: 'Please enter your last name.',
			requiredMessage: 'Last name is required.',
			component: TextFormInput
		}
		],
		[{
			...InfoDefaultFormConfig,
			name: 'phoneNumber',
			heading: 'Mobile phone',
			placeholder: 'Please enter mobile number',
			requiredMessage: 'Mobile number required.',
			regex: /^5[0-9]{8}$/,
			regexMessage: 'Enter valid phone number',
			component: TextFormInput
		}
		],
		[{
			...InfoDefaultFormConfig,
			name: 'sex',
			heading: 'Sex',
			placeholder: 'Please enter sex',
			requiredMessage: 'Sex number required.',
			component: RadioFormInput,
			options: PetSex
		}
		]
	];

	useEffect(() => {
		reset(data);
	}, [data, reset]);

	const onSubmit = async (data) => {
		try {
			await Api.Prof.updateInfo(data);
			await refreshToken();
			updateUserStore({ dispatch });
			setSuccess('user-updated');
		} catch (error) {
			setError(error);
		}
	};


	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormInput FormConfig={InfoFormConfig} buttonName={'Change Info'} fullButton />
		</form>
	);
};

export default ProfileInfoChange;
