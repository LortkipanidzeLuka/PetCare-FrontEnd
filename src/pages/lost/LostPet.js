import GenericDataGrid from '../../components/item-grid/GenericDataGrid';
import LostPetModal from '../../components/item-modal/LostPetModal';
import AddLostPet from './AddLostPet';
import { useModal } from '../../hooks/UseModal';
import { Button } from 'reactstrap';
import PetCardGeneric from '../../components/item-card/PetCardGeneric';

const LostPet = () => {
	const [modalOpen, ,toggleModal] = useModal();

	return (
		<div>
			<Button onClick={toggleModal}>Add Pet</Button>
			<GenericDataGrid DetailModal={LostPetModal} GenericCard={PetCardGeneric}/>
			<AddLostPet open={modalOpen} closeModal={toggleModal}/>
		</div>

	);
};

export default LostPet;
