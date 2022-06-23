import { del, get, post, put } from 'src/services/axios';

const api = {
	fetchPetServices: (params, _loading) =>
		get(`advertisements/petservice/search/${params.type}?${new URLSearchParams(params).toString()}`,  {} ).then((data) => data),
	createPetService:(params, _loading) =>
		post(`advertisements/petservice`, params),
	updatePetService:(params, _loading) =>
		put(`advertisements/petservice/${params.id}`, params),
	fetchSinglePetService: (params, _loading) =>
		get(`advertisements/petservice/${params.id}`,  {} ).then((data) => data),
	deleteSinglePetService: (params, _loading) =>
		del(`advertisements/petservice/${params.id}`,  {} ).then((data) => data),
	fetchSinglePetServiceImages: (params, _loading) =>
		get(`advertisements/petservice/${params.id}/images`,  {} ).then((data) => data),
};

export default api
