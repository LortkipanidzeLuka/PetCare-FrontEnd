import { del, get, post, put } from 'src/services/axios';

const api = {
	fetchLostFounds: (params, _loading) =>
		get(`advertisements/lostfound/search/${params.type}?${new URLSearchParams(params).toString()}`,  {} ).then((data) => data),
	createLostFound:(params, _loading) =>
		post(`advertisements/lostfound`, params),
	updateLostFound:(params, _loading) =>
		put(`advertisements/lostfound/${params.id}`, params),
	fetchSingleLostFound: (params, _loading) =>
		get(`advertisements/lostfound/${params.id}`,  {} ).then((data) => data),
	deleteSingleLostFound: (params, _loading) =>
		del(`advertisements/lostfound/${params.id}`,  {} ).then((data) => data),
	fetchSingleLostFoundImages: (params, _loading) =>
		get(`advertisements/lostfound/${params.id}/images`,  {} ).then((data) => data),
};

export default api
