import { Col, Row } from 'reactstrap';
import Text from '../styled/text/Text';
import { TextType } from '../styled/text/TextType';

export const TextAreaFormInput = ({ register, errors, requiredMessage, placeholder, name, heading, xl, lg, sm, xs }) => {
	return (
		<Col xl={xl} lg={lg} sm={sm} xs={xs}>
			<Row className={'mrb-medium'}>
				<Text text={heading} type={TextType.MEDIUM} classNames={['mrb-small']} />
				<textarea
					className={'form-control'} {...register(name, {
					required: requiredMessage
				})}
					name={name}
					placeholder={placeholder}
					required={false} />
				{errors[name] &&
					<Text text={errors[name]['message']} type={TextType.SMALL} classNames={['error-text']} />}
			</Row>
		</Col>
	);
};

