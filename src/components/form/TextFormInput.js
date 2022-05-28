import { Col, Row } from 'reactstrap';
import Text from '../styled/text/Text';
import { TextType } from '../styled/text/TextType';
export const TextInputType = {
	TEXT:"text",
	PASSWORD:"password"
}
export const TextFormInput = ({ register, errors, regex, type=TextInputType.TEXT, regexMessage, requiredMessage, placeholder, name, heading, xl, lg, sm, xs }) => {
	return (
		<Col xl={xl} lg={lg} sm={sm} xs={xs}>
			<Row className={'mrb-medium'}>
				<Text text={heading} type={TextType.MEDIUM} classNames={['mrb-small']} />
				<input
					className={'form-control'} {...register(name, {
					required: requiredMessage,
					pattern: regex && regexMessage ? { value: regex, message: regexMessage } : {}
				})}
					name={name}
					placeholder={placeholder}
					type={type}
					required={false} />
				{errors[name] &&
					<Text text={errors[name]['message']} type={TextType.SMALL} classNames={['error-text']} />}
			</Row>
		</Col>
	);
};

