import { get, post } from 'src/services/axios';

const api = {
	fetchAdvs: (params, _loading) =>
		get(`advertisement/LOST?${new URLSearchParams(params).toString()}`,  {} ).then((data) => data),
	createAdv:(params, _loading) =>
		post(`advertisement/LOST`, params)
};

export default api
