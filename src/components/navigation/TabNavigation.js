import { Col, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import React, { useEffect } from 'react';
import { TextType } from '../styled/text/TextType';
import Text from '../styled/text/Text';

const TabNavigation = ({setActiveTab, tabs, defaultTab, activeTab, children}) => {

	useEffect(() => {
		if (defaultTab) {
			setActiveTab(defaultTab);
		}
	}, [defaultTab, setActiveTab]);

	return (
		<Col lg={12}>
			<Nav pills className='nav-justified'>
				{tabs.map((val, index) => {
					return (
						<NavItem key={index}>
							<NavLink
								className={classnames({
									active: activeTab === `${index}`
								}) + (index === 0 ? ' tab-left' : index === tabs.length - 1 ? ' tab-right' : '') + ' pointer'}
								onClick={() => {
									setActiveTab(`${index}`);
								}}>
								<Text text={val.name} type={TextType.MEDIUM} icon={val.icon}
											classNames={['justify-content-center tab-text']} />
							</NavLink>
						</NavItem>
					);
				})}
			</Nav>
			{children}
		</Col>
	);
};

export default TabNavigation;
