import { get, post } from 'src/services/axios';

const api = {
	fetchLostFounds: (params, _loading) =>
		get(`advertisements/lostfound/LOST?${new URLSearchParams(params).toString()}`,  {} ).then((data) => data),
	createLostFound:(params, _loading) =>
		post(`advertisements/lostfound/LOST`, params)
};

export default api
