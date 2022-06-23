import { Col, Row } from 'reactstrap';
import Text from '../../styled/text/Text';
import { TextType } from '../../styled/text/TextType';
import { useEffect, useState } from 'react';
import Select from 'react-select';

export const ChipsFormInput = ({ register,requiredMessage,getValue, setError, placeholder, setValue, errors, name, heading, xl, lg, sm, xs, options }) => {
	const [innerValue, setInnerValue] = useState(null);
	const [newOption, setNewOption] = useState('');
	const outerValue = getValue(name);
	const fixedOption = options && options.length ? options : [];
	useEffect(() => {
		if (outerValue){
			setInnerValue(outerValue.map((cur)=>({value:cur, label:cur})));
		}
	}, [outerValue]);
	useEffect(()=>{
		console.log(errors)
	},[errors])
	return (<Col xl={xl} lg={lg} sm={sm} xs={xs}>
			<Row className={'mrb-medium'}>
				<Text text={heading} type={TextType.MEDIUM} classNames={['mrb-small']} />
				<Select
					{...register(name, { required: requiredMessage })}
					className={'no-padding'}
					placeholder={placeholder}
					onChange={(newValue) => {
						if (newValue && newValue.length){
							setError(name, null)
						}
						setInnerValue(newValue);
						setValue(name, newValue.map(value => value.value));
					}}
					onInputChange={(newValue) => {
						if (!fixedOption.length) {
							setNewOption(newValue);
						}
					}}
					options={newOption ? [{ value: newOption, label: newOption }] : fixedOption}
					isMulti={true}
					value={innerValue}
				/>
				{errors[name] && errors[name].message &&
					<Text text={errors[name]['message']} type={TextType.SMALL} classNames={['error-text']} />}
			</Row>
		</Col>);
};
export default ChipsFormInput;
