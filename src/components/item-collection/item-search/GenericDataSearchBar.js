import { Col, Row, TabContent } from 'reactstrap';
import Block from '../../styled/block/Block';
import FormInput from '../../form/FormInput';
import { useEffect, useState } from 'react';
import TabNavigation from '../../navigation/TabNavigation';
import NavContent from '../../navigation/NavContent';
import MapFormInput from '../../form/input/MapFormInput';
import { latLonTranslate } from '../../../utils/UtilActions';

const GenericDataSearchBar = ({ searchConfig, setParams, changePage }) => {

	const [initialData, setInitialData] = useState({});
	const [activeTab, setActiveTab] = useState('0');
	const MapFormConfig = [[
		{
			lg: '12', xl: '12', sm: '12', xs: '12',
			name: 'lat-lon',
			heading: 'Select Location',
			type: 'text',
			component: MapFormInput,
			encrypt: latLonTranslate.encrypt,
			decrypt: latLonTranslate.decrypt
		}
	]];
	const ParamFormConfig = searchConfig.fields.map(val => (val.map(innerVal => ({ ...innerVal }))));

	const onParamSubmit = async (data) => {
		changePage({ target: { textContent: '1' } });
		setParams(data);
	};

	const onMapSubmit = async (data) => {
		const { latitude, longitude } = latLonTranslate.decrypt(data['lat-lon']);
		setParams(prev => {
			return ({ ...prev, latitude: latitude, longitude: longitude });
		});
	};

	useEffect(() => {
		if (searchConfig.initialData) {
			setInitialData(searchConfig.initialData);
		}
	}, [searchConfig]);

	const tabs = [
		{
			icon: 'mdi mdi-receipt',
			name: 'Parameters'
		},
		{
			icon: 'mdi mdi-account-edit',
			name: 'Map'
		}
	];

	return (
		<Row>
			<Col className={'pet-card-col'}>
				<Block noShadow className={'auto-width'}>
					<TabNavigation className={'mrt-small p-all-small'} tabs={tabs} defaultTab={0} activeTab={activeTab}
												 setActiveTab={setActiveTab}>
						<TabContent activeTab={activeTab}>
							<NavContent index={0}>
								<div className={'p-all-medium'}>
									<FormInput data={initialData} FormConfig={ParamFormConfig} buttonName={'Search'} fullButton
														 onSubmit={onParamSubmit} />
								</div>
							</NavContent>
							<NavContent index={1}>
								<div className={'p-all-medium'}>
									<FormInput data={initialData} FormConfig={MapFormConfig} buttonName={'Search'} fullButton
														 onSubmit={onMapSubmit} />
								</div>
							</NavContent>
						</TabContent>
					</TabNavigation>
				</Block>
			</Col>
		</Row>
	);
};

export default GenericDataSearchBar;
