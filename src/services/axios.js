import axios from 'axios';
import storage from '../utils/Storage';

const baseURL = process.env.API_BASE_URL;
export const authToken = String(process.env.AUTH_TOKEN);

const instance = axios.create({ baseURL });
const noAuth = axios.create({ baseURL });


let authTokenRequest;

function resetAuthTokenRequest() {
	authTokenRequest = null;
}


export const setAuthHeader = async (response) => {
	storage('access_token').set(response.access_token);
	storage('refresh_token').set(response.refresh_token);
	instance.defaults.headers.common[authToken] = `Bearer ${response.access_token}`;
	return Promise.resolve();
};

function getAuthToken(refreshToken) {
	if (!authTokenRequest) {
		authTokenRequest = noAuth.post('/auth/refresh', { refreshToken }, { headers: { } });
		authTokenRequest.then(resetAuthTokenRequest, resetAuthTokenRequest);
	}
	return authTokenRequest;
}


instance.interceptors.response.use(
	res => res,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401) {
			const refreshToken = storage('refresh_token').get();
			// @ts-ignore
			if (!['undefined', 'null'].includes(String(refreshToken)) && !originalRequest._retry) {
				delete originalRequest.headers[authToken];
				try {
					const res = await getAuthToken(refreshToken);
					if ([200, 201].includes(res.status)) {
						await setAuthHeader(res.data);
						originalRequest._retry = true;
						originalRequest.headers[authToken] = `Bearer ${res.data.access_token}`;
						return instance(originalRequest);
					}
				} catch (err) {
					// store.dispatch<any>(userActions.logout());
					return Promise.reject(err?.response?.data);
				}
			} else {
				return Promise.reject(error?.response?.data);
			}
		}

		return Promise.reject(error?.response?.data);
	}
);
export const { get, post, put, delete: del } = instance;

