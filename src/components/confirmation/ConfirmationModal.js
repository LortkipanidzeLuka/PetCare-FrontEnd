import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Text from '../styled/text/Text';
import { TextType } from '../styled/text/TextType';

const ConfirmationModal = ({ open, params, toggle, callback, text }) => {

	return (
		<Modal isOpen={open}>
			<ModalHeader>
				<Text text={'Confirmation'} type={TextType.LARGE} />
			</ModalHeader>
			<ModalBody className={'confirmation-body'}>
				<div className={'d-flex'}>
					<Text text={text} type={TextType.MEDIUM} align={'center'} />
				</div>
			</ModalBody>
			<ModalFooter>
				<div className={'d-flex justify-content-between confirmation-actions'}>
					<Button onClick={() => {
						callback(params);
						toggle();
					}} color={'primary'}>
						<Text text={'Yes'} type={TextType.MEDIUM} align={'center'} />
					</Button>
					<Button onClick={() => {
						toggle();
					}} color={'danger'}>
						<Text text={'No'} type={TextType.MEDIUM} align={'center'} />
					</Button>
				</div>
			</ModalFooter>
		</Modal>
	);
};

export default ConfirmationModal;
