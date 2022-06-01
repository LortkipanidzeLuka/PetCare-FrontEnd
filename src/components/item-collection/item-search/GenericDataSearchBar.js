import { Col, Row } from 'reactstrap';
import Block from '../../styled/block/Block';
import FormInput from '../../form/FormInput';

const GenericDataSearchBar = ({ searchConfig, setParams }) => {

	const FormConfig = searchConfig.map(val => (val.map(innerVal => ({ ...innerVal }))));
	console.log(searchConfig)
	const onSubmit = async (data) => {
		setParams(data);
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
