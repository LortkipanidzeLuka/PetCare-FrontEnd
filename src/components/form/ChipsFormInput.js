import { Col, Row } from 'reactstrap';
import Text from '../text/Text';
import { TextType } from '../text/TextType';

export const ChipsFormInput = ({ chips, errors, name, heading, xl, lg, sm, xs }) => {

	return (
		<Col xl={xl} lg={lg} sm={sm} xs={xs}>
			<Row className={'mrb-medium'}>
				<Text text={heading} type={TextType.MEDIUM} classNames={['mrb-small']} />

				{errors[name] &&
					<Text text={errors[name]['message']} type={TextType.SMALL} classNames={['error-text']} />}
			</Row>
		</Col>
	);
}
