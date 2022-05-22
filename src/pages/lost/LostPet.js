import GenericDataGrid from '../../components/item-grid/GenericDataGrid';
import LostPetModal from '../../components/item-modal/LostPetModal';

const LostPet=()=>{


	return(
		<GenericDataGrid DetailModal={LostPetModal}/>
	)
}

export default LostPet
