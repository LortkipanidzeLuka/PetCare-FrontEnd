import { Button, Col, Row } from 'reactstrap';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Text from '../styled/text/Text';
import { TextType } from '../styled/text/TextType';

const FormInput = ({ horizontal, FormConfig, buttonName, fullButton = false, data, onSubmit, resetAfterSubmit }) => {
	const { register, handleSubmit, formState: { errors }, reset, setValue, getValues, clearErrors, setError } = useForm({
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
		<form onSubmit={handleSubmit(onSubmitForm)} className={horizontal ? 'd-flex horizontal-form' : ''}>
			{FormConfig.map((value, index) => {

				return (
					<div className={`d-flex pl-small pr-small row`} key={`input-row buttonName ${index}`}>
						{value.map((cur, innerIndex) => {
							const FormInputComponent = cur.component;
							// setError()
							return (
								<React.Fragment key={(index + 9) * 10 + innerIndex}>
									<FormInputComponent {...cur} errors={errors} clearErrors={clearErrors} getValue={getValues}
																			register={register} setValue={setValue} setError={setError} />
									{innerIndex !== value.length - 1 ? <Col xl={'2'} lg={'2'} sm={'2'} xs={'2'} /> : null}
								</React.Fragment>
							);
						})}
					</div>
				);
			})}
			{fullButton ? <Row>
				<Col className={`${horizontal ? 'd-flex justify-content-center align-items-center mrt-small' : ''}`}>
					<Button type='submit' className={fullButton ? 'full-width' : ''}>
						<Text text={buttonName} type={TextType.MEDIUM} align={'center'}/>
					</Button>
				</Col>
			</Row> : <></>}
		</form>);
};

export default FormInput;
