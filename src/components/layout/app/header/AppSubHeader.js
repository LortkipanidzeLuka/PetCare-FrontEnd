import Text from '../../../styled/text/Text';
import { TextType } from '../../../styled/text/TextType';
import { Link } from 'react-router-dom';
import React from 'react';

const AppSubHeader = () => {
	const style = {
		color: 'unset',
		textDecoration: 'auto'
	};
	const tabs = [
		{
			path: '/lost-found',
			text: 'Lost And Found'
		},
		{
			path: '/pet-care',
			text: 'Pet Service'
		},
		{
			path: '/charity',
			text: 'Charity'
		}
	];
	return (
		<div className='subheader'>
			<ol className='subheader-list content-width'>
				{tabs.map((value, index) => (
						<li key={index}>
							<Link to={value.path} style={style}>
								<Text type={TextType.HEADER_TAB} text={value.text} />
							</Link>
						</li>
					)
				)}
			</ol>
		</div>
	);
};

export default AppSubHeader;
