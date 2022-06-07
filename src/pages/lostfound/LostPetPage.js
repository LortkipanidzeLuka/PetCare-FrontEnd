import AddLostPet from './AddLostPet';
import { useModal } from '../../hooks/UseModal';
import { Button } from 'reactstrap';
import { PAGES } from '../../utils/PageConfig';
import useFetchTrigger from '../../hooks/UseFetchTrigger';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../storage/user/Selector';

const LostPetPage = () => {
	const [, modalOpen, , toggleModal] = useModal();
	const { Grid, pageConfig } = PAGES.LOST_FOUND;
	const [updateData, fetchData] = useFetchTrigger();
	const isLoggedIn = useSelector(userSelectors.isLoggedIn);
	console.log(isLoggedIn);

	return (
		<div>
			<div className={'d-flex justify-content-between'}>
				<Text text={'Lost And Found Pets'} type={TextType.LARGE} />
				{isLoggedIn ? <Button onClick={toggleModal} className={'add-button'}>
					<Text text={'Add Advertisement'} type={TextType.MEDIUM} />
				</Button> : null}
			</div>
			<Grid {...pageConfig} updateData={updateData} />
			{isLoggedIn ? <AddLostPet open={modalOpen} closeModal={toggleModal} fetchSingle={pageConfig.fetchSingle}
																fetchData={fetchData} /> : null}
		</div>
	);
};

export default LostPetPage;
