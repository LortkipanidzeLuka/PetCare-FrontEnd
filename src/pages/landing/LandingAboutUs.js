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
				<Block className={'full-width full-height landing-about-us-wrapper'}>
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
											text={'Speak with neighbors, postal carriers, landscapers,' +
												' and anyone else in the vicinity who might’ve seen your pet ' +
												'and post your lost pet flyer in local vet offices and other ' +
												'community spots (grocery store, municipal building, etc.) ' +
												'Recruit friends and family to speed up and widen the search. ' +
												'Remember: 67% of households are pet owners and many will be glad ' +
												'to help.\n'} type={TextType.REGULAR} />
							</div>
						</div>
						<div className={'d-flex flex-row'}>
							<div className={'mrr-medium'}>
								<i className={'mdi-account-circle mdi-36px mdi'} />
								<div className={'about-us-line'}/>
							</div>
							<div>
								<Text text={'Work the neighborhood'} type={TextType.HEADING} />
								<Text classNames={['mrt-small faint-text']}
											text={'Speak with neighbors, postal carriers, landscapers,' +
												' and anyone else in the vicinity who might’ve seen your pet ' +
												'and post your lost pet flyer in local vet offices and other ' +
												'community spots (grocery store, municipal building, etc.) ' +
												'Recruit friends and family to speed up and widen the search. ' +
												'Remember: 67% of households are pet owners and many will be glad ' +
												'to help.\n'} type={TextType.REGULAR} />
							</div>
						</div>
						<div className={'d-flex flex-row'}>
							<div className={'mrr-medium'}>
								<i className={'mdi-account-circle mdi-36px mdi'} />
								<div className={'about-us-line'}/>
							</div>
							<div>
								<Text text={'Work the neighborhood'} type={TextType.HEADING} />
								<Text classNames={['mrt-small faint-text']}
											text={'Speak with neighbors, postal carriers, landscapers,' +
												' and anyone else in the vicinity who might’ve seen your pet ' +
												'and post your lost pet flyer in local vet offices and other ' +
												'community spots (grocery store, municipal building, etc.) ' +
												'Recruit friends and family to speed up and widen the search. ' +
												'Remember: 67% of households are pet owners and many will be glad ' +
												'to help.\n'} type={TextType.REGULAR} />
							</div>
						</div>
					</div>
				</Block>
			</div>

		</div>
	);
};
export default LandingAboutUs;
