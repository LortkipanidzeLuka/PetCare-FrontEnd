import { Col, Row } from 'reactstrap';
import Text from '../text/Text';
import { TextType } from '../text/TextType';

export const SelectFormInput = ({ options, register, errors, requiredMessage, name, heading, xl, lg, sm, xs }) => {
	return (
		<Col xl={xl} lg={lg} sm={sm} xs={xs}>
			<Row className={'mrb-medium'}>
				<Text text={heading} type={TextType.MEDIUM} classNames={['mrb-small']} />
				<select
					className={'form-control form-select'}
					{...register(name, { required: requiredMessage })}
					name={name}
					required={false}>
					{options.map((value, index) => (
						<option className={'form-control'} value={`${value.value}`} key={index}>
							{value.label}
						</option>
					))}
				</select>
				{errors[name] &&
					<Text text={errors[name]['message']} type={TextType.SMALL} classNames={['error-text']} />}
			</Row>
		</Col>

	);
};

