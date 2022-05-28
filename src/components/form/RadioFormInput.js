import { Col, Row } from 'reactstrap';
import Text from '../styled/text/Text';
import { TextType } from '../styled/text/TextType';

export const RadioFormInput = ({ register, errors, options, name, heading, xl, lg, sm, xs }) => {
	return (<Col xl={xl} lg={lg} sm={sm} xs={xs}>
			<Row className={'mrb-medium'}>
				<Text text={heading} type={TextType.MEDIUM} classNames={['mrb-small']} />
				<div className={"d-flex justify-content-evenly"}>
					{options.map((value, index) => (
						<div className={'d-flex align-items-baseline'}>
							<input value={value.value} {...register(name)} type={'radio'} name={name} defaultChecked={index === 0} />
							<Text text={value.label} type={TextType.MEDIUM} classNames={['mrl-small']} />
						</div>
					))}
				</div>
				{errors[name] &&
					<Text text={errors[name]['message']} type={TextType.SMALL} classNames={['error-text']} />}
			</Row>
		</Col>
	);
};
