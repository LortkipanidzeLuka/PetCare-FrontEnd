import GenericDataGrid from '../../components/item-grid/GenericDataGrid';
import LostPetModal from '../../components/item-modal/LostPetModal';
import AddLostPet from './AddLostPet';
import { useModal } from '../../hooks/UseModal';
import { Button } from 'reactstrap';

const LostPet = () => {
	const [modalOpen, ,toggleModal] = useModal();

	return (
		<div>
			<Button onClick={toggleModal}>Add Pet</Button>
			<GenericDataGrid DetailModal={LostPetModal} />
			<AddLostPet open={modalOpen} closeModal={toggleModal}/>
		</div>

	);
};

export default LostPet;
