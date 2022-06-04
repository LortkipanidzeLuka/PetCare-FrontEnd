import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import Text from '../text/Text';
import { TextType } from '../text/TextType';

const AccordionSingle = ({ toggle, active, heading, AccordionData }) => {


	return (
		<div className={'accordion-item'}>
			<Link to='#' className='pointer' onClick={toggle}>
				<Text text={heading} type={TextType.MEDIUM} />
				<i className={active ? 'mdi mdi-arrow-down ac-mdi-arrow-up accor-icon' : 'mdi mdi-arrow-up accor-icon'} />
			</Link>

			<Collapse isOpen={active}>
				<div className={'p-all-medium'}>
					{AccordionData}
				</div>
			</Collapse>
		</div>
	);
};

export default AccordionSingle;
