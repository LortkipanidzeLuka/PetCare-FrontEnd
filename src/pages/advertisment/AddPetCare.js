import { Modal, ModalHeader } from 'reactstrap';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';

const AddPetCare=({open, closeModal})=>{
	return(
		<Modal isOpen={open} toggle={closeModal} className={'big-modal'}>
			<ModalHeader>
				<Text text={`Create Pet Care Advertisement`} type={TextType.LARGE} />
			</ModalHeader>
			<div>
				Pet Care
			</div>
		</Modal>
	)
}

export default AddPetCare
