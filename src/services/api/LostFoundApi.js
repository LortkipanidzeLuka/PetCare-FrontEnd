import { del, get, post } from 'src/services/axios';

const api = {
	fetchLostFounds: (params, _loading) =>
		get(`advertisements/lostfound/LOST?${new URLSearchParams(params).toString()}`,  {} ).then((data) => data),
	createLostFound:(params, _loading) =>
		post(`advertisements/lostfound/LOST`, params),
	fetchSingleLostFound: (params, _loading) =>
		get(`advertisements/lostfound/LOST/${params.id}`,  {} ).then((data) => data),
	deleteSingleLostFound: (params, _loading) =>
		del(`advertisements/lostfound/LOST/${params.id}`,  {} ).then((data) => data),
	fetchSingleLostFoundImages: (params, _loading) =>
		get(`advertisements/lostfound/LOST/${params.id}/images`,  {} ).then((data) => data),
};

export default api
