import React, { useState } from 'react';
import TabNavigation from '../../components/navigation/TabNavigation';
import NavContent from '../../components/navigation/NavContent';
import useQueryParams from '../../hooks/UseQueryParams';
import ProfileInfo from './components/ProfileInfo';
import { Col, Row, TabContent } from 'reactstrap';
import ProfileAdvertisementTab from './tabs/ProfileAdvertisementTab';
import ProfileInfoChangeTab from './tabs/ProfileInfoChangeTab';
import ProfilePasswordChangeTab from './tabs/ProfilePasswordChangeTab';

const ProfilePage = () => {

	const { param } = useQueryParams('tab');
	const [activeTab, setActiveTab] = useState('0');
	const [info, setInfo] = useState({});

	const tabs = [
		{
			icon: 'mdi mdi-receipt',
			name: 'Advertisement'
		},
		{
			icon: 'mdi mdi-account-edit',
			name: 'Edit profile'
		},
		{
			icon: 'mdi mdi-monitor-edit',
			name: 'Change password'
		}
	];

	return (

		<TabNavigation tabs={tabs} defaultTab={param} activeTab={activeTab} setActiveTab={setActiveTab}>
			<Row className='pt-4'>
				<Col xxl={3} xl={3} lg={4} md={6} sm={12} xs={12}>
					<ProfileInfo info={info} setInfo={setInfo}/>
				</Col>
				<Col xxl={9} xl={9} lg={8} md={6} sm={12} xs={12}>
					<TabContent activeTab={activeTab}>
						<NavContent index={0}>
							<ProfileAdvertisementTab data={info} />
						</NavContent>
						<NavContent index={1}>
							<ProfileInfoChangeTab data={info} />
						</NavContent>
						<NavContent index={2}>
							<ProfilePasswordChangeTab data={info} />
						</NavContent>
					</TabContent>
				</Col>
			</Row>
		</TabNavigation>
	);
};

export default ProfilePage;
