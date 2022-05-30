import { Col, Row } from 'reactstrap';
import Text from '../../styled/text/Text';
import { TextType } from '../../styled/text/TextType';
import { useState } from 'react';
import Select from 'react-select';

export const ChipsFormInput = ({ placeholder, setChips, errors, name, heading, xl, lg, sm, xs }) => {
	const [value, setValue] = useState(null);
	const [newOption, setNewOption] = useState('');
	return (
		<Col xl={xl} lg={lg} sm={sm} xs={xs}>
			<Row className={'mrb-medium'}>
				<Text text={heading} type={TextType.MEDIUM} classNames={['mrb-small']} />
				<Select
					className={'no-padding'}
					placeholder={placeholder}
					onChange={(newValue) => {
						setValue(newValue);
						setChips(newValue.map(value => value.value));
					}}
					onInputChange={(newValue) => {
						setNewOption(newValue);
					}}
					options={newOption ? [{ value: newOption, label: newOption }] : []}
					isMulti={true}
					value={value}
				/>
				{errors[name] &&
					<Text text={errors[name]['message']} type={TextType.SMALL} classNames={['error-text']} />}
			</Row>
		</Col>
	);
};
export default ChipsFormInput;
