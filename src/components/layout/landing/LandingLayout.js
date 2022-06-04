import LandingHeader from './header/LandingHeader';
import AppFooter from '../shared/AppFooter';

const LandingLayout = (props) => {

	return (
		<div className='main'>
			<LandingHeader />
			<div className="content-landing">
				{props.children}
			</div>
			<AppFooter />
		</div>
	);
};

export default LandingLayout;
