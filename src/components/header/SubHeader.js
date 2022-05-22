import Text from '../text/Text';
import { TextType } from '../text/TextType';
import { Link } from 'react-router-dom';

const SubHeader = () => {
	const style = {
			color: 'unset',
			textDecoration: 'auto'
		}
	;
	return (
		<div className='subheader'>
			<ol className='subheader-list content-width'>
				<li>
					<Link to={'/lostfound'} style={ style }>
						<Text type={TextType.HEADER_TAB} text={'Lost And Found'} />
					</Link>
				</li>
				<li>
					<Link to={'/pet-care'} style={ style }>
						<Text type={TextType.HEADER_TAB} text={'Pet Care'} />
					</Link>
				</li>
				<li>
					<Link to={'/adoption'} style={ style }>
						<Text type={TextType.HEADER_TAB} text={'Adoption'} />
					</Link>
				</li>
				<li>
					<Link to={'/charity'} style={ style }>
						<Text type={TextType.HEADER_TAB} text={'Charity'} />
					</Link>
				</li>
			</ol>
		</div>
	);
};

export default SubHeader;
