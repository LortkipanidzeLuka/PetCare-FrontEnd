import { del, get, post, put } from 'src/services/axios';

const api = {
	fetchAdoptions: (params, _loading) =>
		get(`advertisements/adoptions/search?${new URLSearchParams(params).toString()}`,  {} ).then((data) => data),
	createAdoption:(params, _loading) =>
		post(`advertisements/adoptions`, params),
	updateAdoption:(params, _loading) =>
		put(`advertisements/adoptions/${params.id}`, params),
	fetchSingleAdoption: (params, _loading) =>
		get(`advertisements/adoptions/${params.id}`,  {} ).then((data) => data),
	deleteSingleAdoption: (params, _loading) =>
		del(`advertisements/adoptions/${params.id}`,  {} ).then((data) => data),
	fetchSingleAdoptionImages: (params, _loading) =>
		get(`advertisements/adoptions/${params.id}/images`,  {} ).then((data) => data),
};

export default api
