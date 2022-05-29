import { Col, Nav, NavItem, NavLink, TabContent } from 'reactstrap';
import classnames from 'classnames';
import React from 'react';
import { useState } from 'react';
import { TextType } from '../styled/text/TextType';
import Text from '../styled/text/Text';

const TabNavigation = (params) => {


	const [activeTab, setActiveTab] = useState('1');

	function toggle1(tab) {
		if (activeTab !== tab) {
			setActiveTab(tab);
		}
	}


	return (
		<Col lg={12}>

			<Nav pills className='navtab-bg nav-justified'>
				{params.tabs.map((val, index) => {
					return (
						<NavItem key={index}>
							<NavLink
								style={{ cursor: 'pointer' }}
								className={classnames({
									active: activeTab === `'${index}'`
								}) + (index === 0 ? ' tab-left' : index === params.tabs.length - 1 ? ' tab-right' : '')}
								onClick={() => {
									toggle1(`'${index}'`);
								}}
							>
								<Text text={val.name} type={TextType.MEDIUM} icon={val.icon} classNames={['justify-content-center']}/>
							</NavLink>
						</NavItem>
					);
				})}
			</Nav>
			<TabContent activeTab={activeTab}>
				{params.children}
			</TabContent>
		</Col>
	);
};

export default TabNavigation;
