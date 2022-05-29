import { get } from 'src/services/axios';

const api = {
	info: (params, _loading) =>
		get('user/info', params).then((data) => data)

};

export default api;
