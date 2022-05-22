import { get } from 'src/services/axios';

const api = {
	fetchAdvs: (params, _loading) =>
		get(`advertisement/LOST?${new URLSearchParams(params).toString()}`,  {} ).then((data) => data),

};

export default api
