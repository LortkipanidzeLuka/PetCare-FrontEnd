import { Button, Col, Row } from 'reactstrap';
import React from 'react';

const FormInput = ({ FormConfig, buttonName, fullButton = false }) => {
	return (
		<>
			{FormConfig.map((value, index) => {
				return (
					<Row className={'d-flex pl-small pr-small'} key={`input-row buttonName ${index}`}>
						{value.map((cur, innerIndex) => {
							const FormInputComponent = cur.component;
							return (
								<React.Fragment key={(index + 9) * 10 + innerIndex}>
									<FormInputComponent {...cur} />
									{innerIndex !== value.length - 1 ? <Col xl={'2'} lg={'2'} sm={'2'} xs={'2'} /> : null}
								</React.Fragment>
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
