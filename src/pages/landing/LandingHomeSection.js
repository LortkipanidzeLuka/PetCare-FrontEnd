import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';
import LandingDog from '../../assets/images/home-dogs.png';
import LandingPageSquares from './LandingPageSquares';

const LandingHomeSection = ({ id }) => {


	return (
		<div id={id} className={'home-wrapper'}>
			<div className={'home-main-text-wrapper landing-page-content-width d-flex align-items-center justify-content-between'}>
				<div className={'home-main-text'}>
					<Text text={'We help reunite lost pets with their families'} type={TextType.EXTRA_LARGE}
								classNames={['white-text']} />
					<Text
						text={'Enter a photo of your missing pet and search our national lost and found pet database to find them'}
						type={TextType.MEDIUM} classNames={['white-text mrt-medium']} />
				</div>
				<div className={'home-img-wrapper'}>
					<img src={LandingDog} alt={'four dog on landing'}/>
				</div>
			</div>

			<LandingPageSquares/>
		</div>
	);
};

export default LandingHomeSection;
