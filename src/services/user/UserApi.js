import { post } from 'src/services/axios';

export default {
	login: (params, _loading) =>
		post('login', { params }).then((data) => data)
};
