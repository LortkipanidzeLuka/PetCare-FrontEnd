import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from '../../storage/user/Selector';
import { useCallback, useEffect, useState } from 'react';
import Api from 'src/services/index';
import useToast, { ToastType } from '../../hooks/UseToast';
import Text from '../styled/text/Text';
import { TextType } from '../styled/text/TextType';
import { refreshToken } from '../../services/axios';
import { updateUserStore } from '../../storage/Actions';
import { useModal } from '../../hooks/UseModal';
import EmailVerification from '../form/custom/EmailVerification';
import ApiLoader from '../styled/loader/ApiLoader';

const EmailVerify = () => {
	const user = useSelector(userSelectors.userInfo);
	const requiresVerification = useSelector(userSelectors.requiresVerification);
	const [,modalOpen, setModalOpen] = useModal(false);
	const dispatch = useDispatch();
	const { setMessage: setError } = useToast(ToastType.ERROR);
	const [loading, setLoading] = useState(false);

	const sendVerification = useCallback(async ()=> {
		setLoading(true);
		try {
			await Api.Sec.sendVerification();
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	}, [setError]);


	useEffect(() => {
		if (requiresVerification) {
			setModalOpen(true);
		} else {
			setModalOpen(false);
		}
	}, [requiresVerification, setModalOpen]);

	const onSubmit = async (data) => {
		try {
			await Api.Sec.submitVerification(data);
			await refreshToken();
			updateUserStore({ dispatch });
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		if (modalOpen) {
			sendVerification();
		}
	}, [modalOpen, sendVerification]);


	return (

		<Modal isOpen={modalOpen && user && user.sub !== undefined && user.sub !== null}>
			<ModalHeader>
				Verify E-mail
			</ModalHeader>
			<ModalBody>
				<ApiLoader loading={loading}>
					<div className={'d-flex flex-column'}>
						<div className={'d-flex justify-content-between pl-small pr-small'}>
							<Text text={`Code sent to email: `} type={TextType.MEDIUM} classNames={['faint-text']} />
							<Text text={`${user.sub}`} type={TextType.MEDIUM} />
						</div>
						<div className={'mrt-medium pr-small pl-small'}>
							<EmailVerification onSubmit={onSubmit} sendVerification={sendVerification}/>
						</div>
					</div>
				</ApiLoader>
			</ModalBody>
		</Modal>
	);
};

export default EmailVerify;
