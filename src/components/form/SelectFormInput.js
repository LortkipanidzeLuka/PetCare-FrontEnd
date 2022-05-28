import { Col, Row } from 'reactstrap';
import Text from '../styled/text/Text';
import { TextType } from '../styled/text/TextType';
import Select from 'react-select';
import { useState } from 'react';

export const SelectFormInput = ({ setValue, options, register, errors, placeholder, requiredMessage, name, heading, xl, lg, sm, xs }) => {
	const [value, setInnerValue] = useState(null);
	const SelectOnChange = (newValue) => {
		setValue(name, newValue.value)
		setInnerValue(newValue)
	}
	register(name, { required: requiredMessage });

	return (
		<Col xl={xl} lg={lg} sm={sm} xs={xs}>
			<Row className={'mrb-medium'}>
				<Text text={heading} type={TextType.MEDIUM} classNames={['mrb-small']} />
				<Select
					className={'no-padding'}
					placeholder={placeholder}
					options={options}
					onChange={SelectOnChange}
					isMulti={false}
					value={value}
				/>
				{errors[name] &&
					<Text text={errors[name]['message']} type={TextType.SMALL} classNames={['error-text']} />}
			</Row>
		</Col>

	);
};

