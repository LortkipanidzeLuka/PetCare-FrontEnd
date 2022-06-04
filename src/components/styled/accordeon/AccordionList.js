import AccordionSingle from './AccordionSingle';
import { useState } from 'react';

const AccordionList = ({ accordionData }) => {
	const [activeTabs, setActiveTabs] = useState({});

	const toggle = (ind) => {
		const newActiveTab = {};
		newActiveTab[ind] = !activeTabs[ind];
		setActiveTabs(newActiveTab);
	};

	return (
		<div className={'accordion-list'}>
			{accordionData.map((value, index) => {
				return (
					<AccordionSingle key={index} toggle={() => toggle(index)} heading={value.heading} AccordionData={value.data}
													 active={activeTabs[index]} />
				);
			})}
		</div>
	);
};

export default AccordionList;
