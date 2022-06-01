import { Col, Row } from 'reactstrap';
import Block from '../../styled/block/Block';
import FormInput from '../../form/FormInput';

const GenericDataSearchBar = ({ searchConfig }) => {

	const FormConfig = searchConfig.map(val => (val.map(innerVal => ({ ...innerVal }))));

	const onSubmit = async (data) => {
		console.log(data);
	};

	return (
		<Row>
			<Col className={'pet-card-col'}>
				<Block noShadow>
					<div className={'p-all-medium'}>
						<FormInput FormConfig={FormConfig} buttonName={'Search'} fullButton onSubmit={onSubmit} />
					</div>
				</Block>
			</Col>
		</Row>
	);
};

export default GenericDataSearchBar;
