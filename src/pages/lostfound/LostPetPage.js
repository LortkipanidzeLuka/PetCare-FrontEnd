import AddLostPet from './AddLostPet';
import { useModal } from '../../hooks/UseModal';
import { Button } from 'reactstrap';
import { PAGES } from '../../utils/PageConfig';

const LostPetPage = () => {
	const [,modalOpen, , toggleModal] = useModal();
	const { Grid, pageConfig } = PAGES.LOST_FOUND;

	return (
		<div>
			<Button onClick={toggleModal}>Add Pet</Button>
			<Grid {...pageConfig} paging={true}/>
			<AddLostPet  open={modalOpen} closeModal={toggleModal} fetchSingle={pageConfig.fetchSingle}/>
		</div>
	);
};

export default LostPetPage;
