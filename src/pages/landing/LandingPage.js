import LandingHomeSection from './LandingHomeSection';
import LandingAboutUs from './LandingAboutUs';
import LandingAchievement from './LandingAchievement';
import LandingFAQS from './LandingFAQS';

const LandingPage = () => {

	return (
		<>
			<div data-bs-spy='scroll' data-bs-target='#navbar-example2' data-bs-offset='0' className='scrollspy-example'
					 tabIndex='0'>
				<LandingHomeSection id='home' />
				<LandingAboutUs id='aboutUs' />
				{/*<LandingAchievement id='achievements' />*/}
				{/*<LandingFAQS id={'faqs'}/>*/}
			</div>
		</>
	);

};

export default LandingPage;
