import { del, get, post, put } from 'src/services/axios';

const api = {
	refreshSingleDonation: (params, _loading) =>
		put(`advertisements/donations/${params.id}/refresh`,  {} ).then((data) => data),
	fetchDonations: (params, _loading) =>
		get(`advertisements/donations/search/${params.type}?${new URLSearchParams(params).toString()}`,  {} ).then((data) => data),
	createDonations:(params, _loading) =>
		post(`advertisements/donations`, params),
	updateDonations:(params, _loading) =>
		put(`advertisements/donations/${params.id}`, params),
	fetchSingleDonations: (params, _loading) =>
		get(`advertisements/donations/${params.id}`,  {} ).then((data) => data),
	deleteSingleDonations: (params, _loading) =>
		del(`advertisements/donations/${params.id}`,  {} ).then((data) => data),
	fetchSingleDonationsImages: (params, _loading) =>
		get(`advertisements/donations/${params.id}/images`,  {} ).then((data) => data),
};

export default api
