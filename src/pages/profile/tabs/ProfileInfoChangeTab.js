import Block from '../../../components/styled/block/Block';
import React from 'react';
import { Col, Row } from 'reactstrap';
import ProfileEmailChange from '../components/ProfileEmailChange';
import ProfileInfoChange from '../components/ProfileInfoChange';

const ProfileInfoChangeTab = ({ data }) => {

	return (

		<Row>
			<Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6}>
				<Block className={'full-tab'}>
					<ProfileInfoChange data={data} />
				</Block>
			</Col>
			<Col xs={12} sm={12} md={12} lg={12} xl={6} xxl={6} className={'md-margin-top'}>
				<Block className={'full-tab'}>
					<ProfileEmailChange data={data} />
				</Block>
			</Col>
		</Row>


	);
};
export default ProfileInfoChangeTab;
