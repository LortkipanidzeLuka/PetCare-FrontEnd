import { Col, Row } from 'reactstrap';
import Text from '../../styled/text/Text';
import { TextType } from '../../styled/text/TextType';
import Select from 'react-select';
import { useCallback, useEffect, useState } from 'react';

export const SelectFormInput = ({
																	getValue,
																	setValue,
																	options,
																	register,
																	errors,
																	placeholder,
																	requiredMessage,
																	name,
																	heading,
																	xl,
																	lg,
																	sm,
																	xs
																}) => {
	const [value, setInnerValue] = useState(null);
	const SelectOnChange = useCallback((newValue) => {
		setValue(name, newValue.value);
		setInnerValue(newValue);
	}, [setInnerValue, setValue, name]);
	const outerValue = getValue(name);

	register(name, { required: requiredMessage });
	useEffect(() => {
		const data = getValue(name);
		if (data) {
			for (let i = 0; i < options.length; i++) {
				if (options[i].label.toLowerCase() === data.toLowerCase() || options[i].value.toLowerCase() === data.toLowerCase()) {
					SelectOnChange(options[i]);
					break;
				}
			}
		}
	}, [name, options, getValue, outerValue, SelectOnChange]);

	return (
		<Col xl={xl} lg={lg} sm={sm} xs={xs}>
			<Row className={'mrb-medium'}>
				<Text text={heading} type={TextType.MEDIUM} classNames={['mrb-small']} />
				<Select
					className={'no-padding'}
					placeholder={placeholder}
					options={options}
					{...register(name, { required: requiredMessage })}
					onChange={SelectOnChange}
					isMulti={false}
					value={value}
				/>
				{errors[name] && errors[name].message &&
					<Text text={errors[name]['message']} type={TextType.SMALL} classNames={['error-text']} />}
			</Row>
		</Col>

	);
};

