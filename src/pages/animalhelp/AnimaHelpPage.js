import AddAnimalHelp from './AddAnimalHelp';
import { useModal } from '../../hooks/UseModal';
import { Button } from 'reactstrap';
import { ARTEFACT_PAGES } from '../../utils/PageConfig';
import useFetchTrigger from '../../hooks/UseFetchTrigger';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../storage/user/Selector';

const AnimaHelpPage = (params) => {
	const [, modalOpen, , toggleModal] = useModal();
	const { Grid, pageConfig } = ARTEFACT_PAGES.ANIMAL_HELP;
	const [updateData, fetchData] = useFetchTrigger();
	const isLoggedIn = useSelector(userSelectors.isLoggedIn);
	if (params && params.isAdoption){
		pageConfig.searchConfig.initialData={
			type: 'ADOPTION'
		}
	}else {
		pageConfig.searchConfig.initialData={
			type: 'LOST'
		}
	}
	return (
		<div>
			<div className={'d-flex justify-content-between'}>
				<Text text={'Animal That Need Help'} type={TextType.LARGE} />
				{isLoggedIn ? <Button onClick={toggleModal} className={'add-button'}>
					<Text text={'Add Advertisement'} type={TextType.MEDIUM} />
				</Button> : null}
			</div>
			<Grid {...pageConfig} updateData={updateData} />
			{isLoggedIn ? <AddAnimalHelp open={modalOpen} closeModal={toggleModal} fetchSingle={pageConfig.fetchSingle}
																	 fetchData={fetchData} /> : null}
		</div>
	);
};

export default AnimaHelpPage;
