import AddLostPet from './AddLostPet';
import { useModal } from '../../hooks/UseModal';
import { Button } from 'reactstrap';
import { PAGES } from '../../utils/PageConfig';

const LostPetPage = () => {
	const [,modalOpen, , toggleModal] = useModal();
	const { Grid, pageConfig } = PAGES.LOSTFOUND;

	return (
		<div>
			<Button onClick={toggleModal}>Add Pet</Button>
			<Grid {...pageConfig} />
			<AddLostPet open={modalOpen} closeModal={toggleModal} />
		</div>

	);
};

export default LostPetPage;
