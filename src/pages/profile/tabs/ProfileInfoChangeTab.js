import Block from '../../../components/styled/block/Block';
import React from 'react';
import { Col, Row } from 'reactstrap';
import ProfileEmailChange from '../components/ProfileEmailChange';
import ProfileInfoChange from '../components/ProfileInfoChange';

const ProfileInfoChangeTab = ({ data }) => {

	return (

		<Row>
			<Col>
				<Block className={'full-tab'}>
					<ProfileInfoChange data={data} />
				</Block>
			</Col>
			<Col>
				<Block className={'full-tab'}>
					<ProfileEmailChange data={data}/>
				</Block>
			</Col>
		</Row>


	);
};
export default ProfileInfoChangeTab;
