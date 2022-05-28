import { Button, Col, Row } from 'reactstrap';

const FormInput = ({ FormConfig, buttonName, fullButton = false }) => {
	return (
		<>
			{FormConfig.map((value, index) => {
				return (
					<Row className={'d-flex p-small'} key={index}>
						{value.map((cur, innerIndex) => {
							const FormInputComponent = cur.component;
							return (
								<>
									<FormInputComponent {...cur} />
									{innerIndex !== value.length - 1 ? <Col xl={'2'} lg={'2'} sm={'2'} xs={'2'} /> : null}
								</>
							);
						})}
					</Row>
				);
			})}
			{fullButton ? <Row>
				<Col>
					<Button type='submit' className={fullButton ? 'full-width' : ''}>{buttonName}</Button>
				</Col>
			</Row> : <></>}
		</>);
};

export default FormInput;
