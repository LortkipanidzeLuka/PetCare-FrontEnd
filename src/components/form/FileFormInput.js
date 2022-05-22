import { Col, Row } from 'reactstrap';
import Text from '../text/Text';
import { TextType } from '../text/TextType';

export const FileFormInput = ({ register, errors, requiredMessage, placeholder, name, heading, xl, lg, sm, xs }) => {
	return (<Col xl={xl} lg={lg} sm={sm} xs={xs}>
		<Row className={'mrb-medium'}>
			<Text text={heading} type={TextType.MEDIUM} classNames={['mrb-small']} />
			<input
				{...register(name, {
					required: requiredMessage
				})}
				name={name}
				placeholder={placeholder}
				type='file'
				id='fileUploader'
				multiple
				className='form-control custom-file-input'
				required={false} />
			{errors[name] &&
				<Text text={errors[name]['message']} type={TextType.SMALL} classNames={['error-text']} />}
		</Row>
	</Col>);
};
