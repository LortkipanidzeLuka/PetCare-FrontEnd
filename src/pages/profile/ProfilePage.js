import React, { useState } from 'react';
import TabNavigation from '../../components/navigation/TabNavigation';
import NavContent from '../../components/navigation/NavContent';
import useQueryParams from '../../hooks/UseQueryParams';
import ProfileInfo from './ProfileInfo';
import { Col, Row, TabContent } from 'reactstrap';
import ProfileAdvertisementTab from './ProfileAdvertisementTab';
import ProfileInfoChangeTab from './ProfileInfoChangeTab';
import ProfilePasswordChangeTab from './ProfilePasswordChangeTab';

const ProfilePage = () => {

	const { param } = useQueryParams('tab');
	const [activeTab, setActiveTab] = useState('0');

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
					<ProfileInfo />
				</Col>
				<Col xxl={9} xl={9} lg={8} md={6} sm={12} xs={12}>
					<TabContent activeTab={activeTab}>
						<NavContent index={0}>
							<ProfileAdvertisementTab />
						</NavContent>
						<NavContent index={1}>
							<ProfileInfoChangeTab />
						</NavContent>
						<NavContent index={2}>
							<ProfilePasswordChangeTab />
						</NavContent>
					</TabContent>
				</Col>
			</Row>
		</TabNavigation>
	);
};

export default ProfilePage;
