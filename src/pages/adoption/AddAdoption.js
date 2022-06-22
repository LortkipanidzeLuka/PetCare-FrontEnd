import { Modal, ModalHeader } from 'reactstrap';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';
import useToast, { ToastType } from '../../hooks/UseToast';
import { useState } from 'react';

const AddAdoption=({open, closeModal})=>{
	const { setMessage: setSuccessMessage } = useToast(ToastType.SUCCESS);
	const { setMessage: setError } = useToast(ToastType.ERROR);
	const [petInfo, setPetInfo] = useState(null);
	const DefaultFormConfig = {
		lg: '5',
		xl: '5',
		sm: '5',
		xs: '12'
	};


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
