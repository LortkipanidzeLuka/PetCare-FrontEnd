import React from 'react';
import AppLayout from '../components/layout/app/AppLayout';
import { useDispatch } from 'react-redux';
import EmailVerify from 'src/components/user/EmailVerify';
import { updateUserStore } from '../storage/Actions';
import LandingLayout from '../components/layout/landing/LandingLayout';

const MiddleWareComponent = ({ children: AppComponent, path }) => {
	const dispatch = useDispatch();
	updateUserStore({ dispatch });

	return (
		<>
			{path === '/' ? (
				<LandingLayout>
					<AppComponent path={path} />
				</LandingLayout>
			) : (
				<AppLayout>
					<AppComponent path={path} />
					<EmailVerify />
				</AppLayout>
			)}
		</>
	);
};

export default MiddleWareComponent;
