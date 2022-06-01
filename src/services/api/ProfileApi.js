import { get, post, put } from 'src/services/axios';

const api = {
	getInfo: (params, _loading) =>
		get('user/info', params).then((data) => data),
	updateInfo: (params, _loading) =>
		put('user/info', params).then((data) => data),
	advertisements: (params, _loading) =>
		get(`user/advertisements?${new URLSearchParams(params).toString()}`, {}).then((data) => data),
	emailChangeCode: (params, _loading) =>
		post('user/email/change/code', params).then((data) => data),
	emailChangeVerify: (params, _loading) =>
		post('user/email/change/code/verify', params).then((data) => data),
	changePassword: (params, _loading) =>
		put('user/password', params).then((data) => data),

};

export default api;
