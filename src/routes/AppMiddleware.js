import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from '../hooks/UseModal';
import { userSelectors } from '../storage/user/Selector';
import EmailVerify from 'src/components/user/EmailVerify';
import { updateUserStore } from '../storage/Actions';

const MiddleWareComponent = ({ children: AppComponent, path }) => {
	const requiresVerification = useSelector(userSelectors.requiresVerification);
	const [modalOpen, setModalOpen] = useModal(false);
	const dispatch = useDispatch();

	updateUserStore({ dispatch });

	useEffect(() => {
		if (requiresVerification) {
			setModalOpen(true);
		} else {
			if (modalOpen) {
				setModalOpen(false);
			}
		}
	}, [requiresVerification, modalOpen, setModalOpen]);

	return (<Layout>
		<AppComponent path={path} />
		<EmailVerify isOpen={modalOpen}/>
	</Layout>);
};

export default MiddleWareComponent;
