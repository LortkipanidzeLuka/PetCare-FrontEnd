import Block from '../../components/styled/block/Block';
import React from 'react';
import { Col, Row } from 'reactstrap';
import ProfileEmailChange from './ProfileEmailChange';
import ProfileInfoChange from './ProfileInfoChange';

const ProfileInfoChangeTab = () => {

	return (

		<Row>
			<Col>
				<Block className={'full-tab'}>
					<ProfileInfoChange />
				</Block>
			</Col>
			<Col>
				<Block className={'full-tab'}>
					<ProfileEmailChange />
				</Block>
			</Col>
		</Row>


	);
};
export default ProfileInfoChangeTab;
