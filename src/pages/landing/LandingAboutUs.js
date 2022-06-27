import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';
import Block from '../../components/styled/block/Block';

const LandingAboutUs = ({ id }) => {

	return (
		<div id={id} className={'landing-about-us'}>
			<div className={'landing-page-content-width d-flex flex-column align-items-center justify-content-between'}>
				<div className={'mrb-big'}>
					<Text text={'About us'} type={TextType.EXTRA_LARGE} />
				</div>
				<Block className={'full-width about-us-block landing-about-us-wrapper'}>
					<div className={'about-us-left'}>
						<Text text={'Help us help animal lovers reunite with lost pets.'} type={TextType.EXTRA_LARGE}
									classNames={['white-text']} />
						<Text text={'With one in three pets going missing in their lifetime, remember that holidays' +
							' present their own risks. From doors accidentally left open during family gatherings ' +
							'to loud fireworks and terrified, bolting pets, a lost animal can instantly happen to ' +
							'any pet parent.'} type={TextType.REGULAR} classNames={['white-text mrt-small']} />
					</div>
					<div className={'about-us-right'}>
						<div className={'d-flex flex-row'}>
							<div className={'mrr-medium'}>
								<i className={'mdi-account-circle mdi-36px mdi'} />
								<div className={'about-us-line'}/>
							</div>
							<div>
								<Text text={'Work the neighborhood'} type={TextType.HEADING} />
								<Text classNames={['mrt-small faint-text']}
											text={'Speak with neighbors, postal carriers, landscapers, ' +
												'and anyone else in the vicinity who might know who the ' +
												'animal belongs to.\n'} type={TextType.REGULAR} />
							</div>
						</div>
						<div className={'d-flex flex-row'}>
							<div className={'mrr-medium'}>
								<i className={'mdi-registered-trademark mdi-36px mdi'} />
								<div className={'about-us-line'}/>
							</div>
							<div>
								<Text text={'Register the pet on PetCare'} type={TextType.HEADING} />
								<Text classNames={['mrt-small faint-text']}
											text={'Frantic parents may be sharing pics of their missing pet and you can' +
												' help make the critical connection. Take a photo of the found pet, upload' +
												' it, and search the PetCare lost and found database. If there’s no match, ' +
												'create a free advertisement of the pet you found wait for the owner to reach you. \n'} type={TextType.REGULAR} />
							</div>
						</div>
						<div className={'d-flex flex-row mrt-medium'}>
							<div className={'mrr-medium'}>
								<i className={'mdi-cellphone mdi-36px mdi'} />
								<div className={'about-us-line'}/>
							</div>
							<div>
								<Text text={'Make a call\n'} type={TextType.HEADING} />
								<Text classNames={['mrt-small faint-text']}
											text={'Contact your local animal shelter, non-emergency police number' +
												' or animal control office, as they might know if a dog or cat has ' +
												'been reported missing and can take a found pet report. If someone ' +
												'contacts you to claim their pet, be sure to confirm proof of ownership' +
												' (i.e., veterinary records, pet’s photo on your phone, etc.). \n'} type={TextType.REGULAR} />
							</div>
						</div>
					</div>
				</Block>
			</div>

		</div>
	);
};
export default LandingAboutUs;
