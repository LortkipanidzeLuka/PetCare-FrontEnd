import AccordionList from '../../components/styled/accordeon/AccordionList';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';

const LandingFAQS = ({ id }) => {

	const accordions=[
		{
			heading:'What are some steps I can take to prevent my dog or cat from getting lost in the future?',
			data: (<Text text={'Some pets are natural escape artists, even if you try to keep indoor cats inside ' +
				'and dogs on a leash. If you have a pet who likes to roam, supervise when they’re' +
				' outdoors and try to determine their exit point. For example, does your fenced ' +
				'yard have a place where a pet can wriggle out? Work with animal trainers to address' +
				' behavioral issues and practice regular training. Check your pet’s collars and ' +
				'harnesses to make sure they are secure, and microchip your pet with up-to-date ' +
				'contact information. '} type={TextType.REGULAR} classNames={['faint-text']}/>),
		},
		{
			heading:'Should I get my dog or cat microchipped?',
			data: (<Text text={'Yes, a pet microchip can play a critical role in reuniting you with your pet. A ' +
				'veterinarian or shelter scans the pet with a microchip reading device to look up' +
				' the contact information associated with that chip. Be sure that your contact ' +
				'information is up to date in the microchip database so that you can be reached. '} type={TextType.REGULAR} classNames={['faint-text']}/>),
		},
		{
			heading:'How can I help look for a lost pet?',
			data: (<Text text={'There are several ways you can help. Search our extensive database for lost pet ' +
				'matches or create a found pet listing. Check spaces next to your house, including' +
				' a window well, under bushes or under your car. Check with neighbors, Nextdoor or' +
				' other social media platforms like Facebook or Craigslist for lost pet posts and ' +
				'share them with your networks. '} type={TextType.REGULAR} classNames={['faint-text']}/>),
		},
		{
			heading:'How can I tell if an animal is lost?',
			data: (<Text text={' If you find a cat missing part of the top of one ear, this indicates that he or ' +
				'she has been spayed or neutered and is a community cat. If you spot a cat with ear' +
				' tips who appears healthy, they should probably be left alone. Check for a collar ' +
				'and ID tag. Try to sit down and use calm body language to get close enough to read' +
				' the information on their tag. Even if you can’t get close enough to the animal, ' +
				'you can alert your local animal shelter that you’ve seen a pet with a collar in ' +
				'the area and note the color of the collar.'} type={TextType.REGULAR} classNames={['faint-text']}/>),
		},
	]
	return (
		<div id={id} className={'landing-faqs'}>
			<div className={'landing-page-content-width'}>
				<div id='gen-ques-accordion' className='d-flex align-items-center flex-column accordion custom-accordion'>
					<div className={'mrt-big mrb-medium'}>
						<Text text={'Frequently Asked Questions'} type={TextType.EXTRA_LARGE}/>
					</div>
					<AccordionList accordionData={accordions}/>
				</div>
			</div>
		</div>
	);
};

export default LandingFAQS;
