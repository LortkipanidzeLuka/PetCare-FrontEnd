import Text from '../../styled/text/Text';
import { TextType } from '../../styled/text/TextType';
import { Button, Col, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';

const EmailVerification = ({ onSubmit, sendVerification }) => {
	const {
		register: verification,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({ shouldUseNativeValidation: false });

	const onSubmitForm = async (params) => {
		try {
			const res = await onSubmit(params);
			reset();
			return res;
		} catch (error) {
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmitForm)}>
			<Col>
				<Row className={'mrb-medium pl-small pr-small'}>
					<div className={`d-flex no-padding flex-column `}>
						<Text text={'Code'} type={TextType.MEDIUM} classNames={['mrb-small']} />
						<div className={'d-flex no-padding flex-row'}>
							<input
								className={'form-control'}
								placeholder={'Please enter code'}
								type={'text'}
								name={'code'}
								onInvalid={() => {
									// nothing
								}}
								{...verification('code', {
									required: 'Please enter code',
									pattern: {
										value: /\d{6}/,
										message: 'Must be 6 digits'
									}
								})}
							/>
							{errors.code &&
								<Text text={errors.code.message} type={TextType.SMALL} classNames={['error-text']} />}
							<Button onClick={sendVerification} className={'mrl-medium code-button'}>
								<Text text={'Send code'} type={TextType.MEDIUM} align={'center'} />
							</Button>
						</div>
						<Button type={'submit'} className={'mrt-medium'}>
							<Text text={'Submit'} type={TextType.MEDIUM} align={'center'} />
						</Button>
					</div>
				</Row>
			</Col>
		</form>
	);
};

export default EmailVerification;
