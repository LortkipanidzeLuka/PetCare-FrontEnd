import React, { useState } from 'react';
import { withRouter } from '../helper';
import Layout from '../../components/layout/Layout';
import storage from '../../utils/Storage';

const AuthRouteComponent = ({ children: AppComponent, path }) => {
	if (!storage('token').isSet()) {

	}

	return (
		<Layout>
			<AppComponent path={path} />
		</Layout>
	);
};

export default (withRouter(AuthRouteComponent));
