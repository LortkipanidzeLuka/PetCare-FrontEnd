import { Button, Col, Row } from 'reactstrap';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const FormInput = ({ FormConfig, buttonName, fullButton = false, data, onSubmit, resetAfterSubmit }) => {
	const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
		shouldUseNativeValidation: true,
		mode: 'onChange'
	});

	useEffect(() => {
		if (data) {
			reset(data);
		}
	}, [data, reset]);

	const onSubmitForm = async (params) => {
		try {
			const res = await onSubmit(params);
			if (res && resetAfterSubmit) {
				reset();
			}
			return res;
		} catch (error) {
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmitForm)}>
			{FormConfig.map((value, index) => {
				return (
					<Row className={'d-flex pl-small pr-small'} key={`input-row buttonName ${index}`}>
						{value.map((cur, innerIndex) => {
							const FormInputComponent = cur.component;
							return (
								<React.Fragment key={(index + 9) * 10 + innerIndex}>
									<FormInputComponent {...cur} errors={errors} register={register} setValue={setValue} />
									{innerIndex !== value.length - 1 ? <Col xl={'2'} lg={'2'} sm={'2'} xs={'2'} /> : null}
								</React.Fragment>
							);
						})}
					</Row>
				);
			})}
			{fullButton ? <Row>
				<Col>
					<Button type='submit' className={fullButton ? 'full-width' : ''}>{buttonName}</Button>
				</Col>
			</Row> : <></>}
		</form>);
};

export default FormInput;
