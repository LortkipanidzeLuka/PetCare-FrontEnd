import { useModal } from '../../hooks/UseModal';
import { PAGES } from '../../utils/PageConfig';
import useFetchTrigger from '../../hooks/UseFetchTrigger';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../storage/user/Selector';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';
import { Button } from 'reactstrap';
import AddPetCare from './AddPetCare';

const PetCarePage = () => {
	const [, modalOpen, , toggleModal] = useModal();
	const { Grid, pageConfig } = PAGES.PET_SERVICE;
	const [updateData, fetchData] = useFetchTrigger();
	const isLoggedIn = useSelector(userSelectors.isLoggedIn);

	return (
		<div>
			<div className={'d-flex justify-content-between'}>
				<Text text={'Pet Care Services'} type={TextType.LARGE} />
				{isLoggedIn ? <Button onClick={toggleModal} className={'add-button'}>
					<Text text={'Add Advertisement'} type={TextType.MEDIUM} />
				</Button> : null}
			</div>
			<Grid {...pageConfig} updateData={updateData} />
			{isLoggedIn ? <AddPetCare open={modalOpen} closeModal={toggleModal} fetchSingle={pageConfig.fetchSingle}
																fetchData={fetchData} /> : null}
		</div>
	);
};
export default PetCarePage;
