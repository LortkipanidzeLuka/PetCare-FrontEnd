import { del, get, post, put } from 'src/services/axios';

const api = {
	fetchAnimalHelps: (params, _loading) =>
		get(`advertisements/animalhelp/search/${params.type}?${new URLSearchParams(params).toString()}`,  {} ).then((data) => data),
	createAnimalHelps:(params, _loading) =>
		post(`advertisements/animalhelp`, params),
	updateAnimalHelp:(params, _loading) =>
		put(`advertisements/animalhelp/${params.id}`, params),
	fetchSingleAnimalHelp: (params, _loading) =>
		get(`advertisements/animalhelp/${params.id}`,  {} ).then((data) => data),
	deleteSingleAnimalHelp: (params, _loading) =>
		del(`advertisements/animalhelp/${params.id}`,  {} ).then((data) => data),
	fetchSingleAnimalHelpImages: (params, _loading) =>
		get(`advertisements/animalhelp/${params.id}/images`,  {} ).then((data) => data),
};

export default api
