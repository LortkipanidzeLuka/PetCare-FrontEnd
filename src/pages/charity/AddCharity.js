import { Modal, ModalHeader } from 'reactstrap';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';

const AddCharity = ({ open, closeModal }) => {

	return (
		<Modal isOpen={open} toggle={closeModal} className={'big-modal'}>
			<ModalHeader>
				<Text text={`Create Charity Advertisement`} type={TextType.LARGE} />
			</ModalHeader>
			<div>
				Charity
			</div>
		</Modal>
	);
};

export default AddCharity;
