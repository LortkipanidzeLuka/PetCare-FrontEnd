import { Button, Col, Row } from 'reactstrap';

const FormInput = ({ FormConfig , buttonName, fullButton=false}) => {
	return (
		<>
			{FormConfig.map((value, index) => {
				const FirstFormComponent = value.first.component;
				const SecondFormComponent = value.second && value.second.component;

				if (!value.double) {
					return (
						<Row className={'d-flex p-small'} key={index}>
							<FirstFormComponent {...value.first} />
						</Row>
					);
				} else {
					return (
						<Row className={'d-flex p-small'} key={index}>
							<FirstFormComponent {...value.first} />
							<Col xl={'2'} lg={'2'} sm={'2'} xs={'2'} />
							<SecondFormComponent {...value.second} />
						</Row>
					);
				}
			})}
			<Row>
				<Col>
					<Button type='submit' className={fullButton?'full-width':''}>{buttonName}</Button>
				</Col>
			</Row>
		</>);
};

export default FormInput;
