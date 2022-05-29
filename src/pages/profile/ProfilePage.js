import React from 'react';
import TabNavigation from '../../components/navigation/TabNavigation';
import NavContent from '../../components/navigation/NavContent';
import Block from '../../components/styled/block/Block';

const ProfilePage = () => {

	const tabs = [
		{
			icon: ' mdi mdi-account-circle',
			name: 'Profile'
		},
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

		<TabNavigation tabs={tabs}>

			<NavContent index={0}>
				<Block className={'profile-tab'}>
					dkajsnks
				</Block>

			</NavContent>

			<NavContent index={1}>
				<Block className={'profile-tab'}>
					tato2
				</Block>
			</NavContent>


			<NavContent index={2}>
				<Block className={'profile-tab'}>
					tato3
				</Block>
			</NavContent>


			<NavContent index={3}>
				<Block className={'profile-tab'}>
					tato5
				</Block>
			</NavContent>

		</TabNavigation>

	);
};

export default ProfilePage;
