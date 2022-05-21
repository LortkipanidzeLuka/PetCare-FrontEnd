import { post } from 'src/services/axios';

const api = {
	login: (params, _loading) =>
		post('auth/login',  params ).then((data) => data),
	register: (params, _loading) =>
		post('auth/register', params ).then((data) => data),
	sendVerification: (params, _loading) =>
		post('auth/verify/resend', params ).then((data) => data),
	submitVerification: (params, _loading) =>
		post('auth/verify', params ).then((data) => data),
};

export default api
