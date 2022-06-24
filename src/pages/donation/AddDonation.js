import { Modal, ModalHeader } from 'reactstrap';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';

const AddDonation = ({ open, closeModal }) => {

	return (
		<Modal isOpen={open} toggle={closeModal} className={'big-modal'}>
			<ModalHeader>
				<Text text={`Create Donation Advertisement`} type={TextType.LARGE} />
			</ModalHeader>
			<div>
				Donation
			</div>
		</Modal>
	);
};

export default AddDonation;
