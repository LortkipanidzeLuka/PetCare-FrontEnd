import PetCharity from '../../assets/images/ach-donation.png';
import PetHug from '../../assets/images/ach-adoption-ach.png';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';

const LandingAchievement = ({ id }) => {

	return (
		<div id={id} className={'landing-achievement'}>
			<div className={'landing-page-content-width d-flex flex-column align-items-center justify-content-between'}>

				<div className={'d-flex flex-row align-items-center achievement-row'}>
					<div>
						<img src={PetHug} alt={'puppy hugging human'} />
					</div>
					<div className={'achievement-data'}>
						<Text text={'Pet Finding And Adoption'} type={TextType.EXTRA_LARGE} />
						<Text text={'Our ReUniters are community volunteers or animal welfare' +
							' professionals that are passionate about reuniting lost pets' +
							' with families. Join our network or refer a volunteer to our ' +
							'team who’s dedicated to bringing lost pets home!'} type={TextType.REGULAR} classNames={['faint-text']} />
						<div className={'mrl-medium mrt-medium'}>
							<div className={'d-flex flex-row align-items-center'}>
								<i className='mdi mdi-circle-medium text-success mr-1' />
								<Text text={'Pet Finder System'} type={TextType.REGULAR} classNames={['faint-text']} />
							</div>
							<div className={'d-flex flex-row align-items-center'}>
								<i className='mdi mdi-circle-medium text-success mr-1' />
								<Text text={'Pet Adoption System'} type={TextType.REGULAR} classNames={['faint-text']} />
							</div>
						</div>
					</div>
				</div>
				<div className={'d-flex flex-row align-items-center achievement-row-rev'}>
					<div className={'achievement-data'}>
						<Text text={'Pet Finding And Adoption'} type={TextType.EXTRA_LARGE} />
						<Text text={'Our ReUniters are community volunteers or animal welfare' +
							' professionals that are passionate about reuniting lost pets' +
							' with families. Join our network or refer a volunteer to our ' +
							'team who’s dedicated to bringing lost pets home!'} type={TextType.REGULAR} classNames={['faint-text']} />
						<div className={'mrl-medium mrt-medium'}>
							<div className={'d-flex flex-row align-items-center'}>
								<i className='mdi mdi-circle-medium text-success mr-1' />
								<Text text={'Pet Finder System'} type={TextType.REGULAR} classNames={['faint-text']} />
							</div>
							<div className={'d-flex flex-row align-items-center'}>
								<i className='mdi mdi-circle-medium text-success mr-1' />
								<Text text={'Pet Adoption System'} type={TextType.REGULAR} classNames={['faint-text']} />
							</div>
						</div>
					</div>
					<div>
						<img src={PetCharity} alt={'donation from ipad'} />
					</div>
				</div>
			</div>

		</div>
	);
};
export default LandingAchievement;
