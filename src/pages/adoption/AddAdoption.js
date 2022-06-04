import { Modal, ModalHeader } from 'reactstrap';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';

const AddAdoption=({open, closeModal})=>{
	return(
		<Modal isOpen={open} toggle={closeModal} className={'big-modal'}>
			<ModalHeader>
				<Text text={`Create Adoption Advertisement`} type={TextType.LARGE} />
			</ModalHeader>
			<div>
				Adoption
			</div>
		</Modal>
	)
}

export default AddAdoption
