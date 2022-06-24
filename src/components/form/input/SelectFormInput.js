import { Col, Row } from 'reactstrap';
import Text from '../../styled/text/Text';
import { TextType } from '../../styled/text/TextType';
import Select from 'react-select';
import { useCallback, useEffect, useState } from 'react';

export const SelectFormInput = ({
																	getValue,
																	setValue,
																	setError,
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
																	xs,
																	isClearable
																}) => {
	const [value, setInnerValue] = useState(null);
	const SelectOnChange = useCallback((newValue) => {
		const value = newValue && newValue.value ? newValue.value : null;
		setValue(name, value);
		setInnerValue(newValue);
		if (newValue && newValue.value) {
			setError(name, '');
		} else if (requiredMessage) {
			setError(name, { type: 'required', message: requiredMessage });
		}
	}, [setInnerValue, setValue, name, setError, requiredMessage]);
	const outerValue = getValue(name);

	register(name, { required: requiredMessage });
	useEffect(() => {
		const data = getValue(name);
		if (data) {
			for (let i = 0; i < options.length; i++) {
				if (String(options[i].label).toLowerCase() === String(data).toLowerCase()
					|| String(options[i].value).toLowerCase() === String(data).toLowerCase()) {
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
					isClearable={isClearable !== false}
				/>
				{errors[name] && errors[name].message &&
					<Text text={errors[name]['message']} type={TextType.SMALL} classNames={['error-text']} />}
			</Row>
		</Col>

	);
};

