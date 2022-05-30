import React from 'react';
import Layout from '../components/layout/Layout';
import { useDispatch } from 'react-redux';
import EmailVerify from 'src/components/user/EmailVerify';
import { updateUserStore } from '../storage/Actions';

const MiddleWareComponent = ({ children: AppComponent, path }) => {

	const dispatch = useDispatch();
	updateUserStore({ dispatch });

	return (<Layout>
		<AppComponent path={path} />
		<EmailVerify />
	</Layout>);
};

export default MiddleWareComponent;
