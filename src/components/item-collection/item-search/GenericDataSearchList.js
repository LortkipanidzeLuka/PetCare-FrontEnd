import { Col, Row } from 'reactstrap';
import Block from '../../styled/block/Block';
import FormInput from '../../form/FormInput';
import { useEffect, useState } from 'react';

const GenericDataSearchList = ({ searchConfig, setParams }) => {

	const FormConfig = searchConfig.fields.map(val => (val.map(innerVal => ({ ...innerVal }))));
	const [initialData, setInitialData] = useState({});
	const onSubmit = async (data) => {
		setParams(data);
	};
	useEffect(() => {
		if (searchConfig.initialData) {
			setInitialData(searchConfig.initialData);
		}
	}, [searchConfig]);

	return (
		<Row>
			<Col className={'pet-card-col'}>
				<Block noShadow noBorder className={'full-width'}>
					<div className={'p-all-medium pl-very-small'}>
						<FormInput data={initialData} horizontal FormConfig={FormConfig} buttonName={'Search'} fullButton onSubmit={onSubmit} />
					</div>
				</Block>
			</Col>
		</Row>
	);
};

export default GenericDataSearchList;
