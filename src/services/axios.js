import axios from 'axios';
import storage from '../utils/Storage';

const baseURL = process.env.REACT_APP_API_BASE_URL;
export const authToken = String(process.env.REACT_APP_AUTH_TOKEN);

const instance = axios.create({ baseURL });
const noAuth = axios.create({ baseURL });

let authTokenRequest;

function resetAuthTokenRequest() {
	authTokenRequest = null;
}

export const deleteAuthHeader = () => {
	storage('accessToken').unset();
	storage('refreshToken').unset();
	delete instance.defaults.headers.common[authToken]; // remove on logout action
};


export const setAuthHeader = async (response) => {
	storage('accessToken').set(response.accessToken);
	storage('refreshToken').set(response.refreshToken);
	instance.defaults.headers.common[authToken] = `Bearer ${response.accessToken}`;
	return Promise.resolve();
};

export async function refreshToken() {
	const refreshTokenStr = storage('refreshToken').get();

	const res = await getAuthToken(refreshTokenStr);
	if ([200, 201].includes(res.status)) {
		await setAuthHeader(res.data);
	}
}

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
			const refreshToken = storage('refreshToken').get();
			// @ts-ignore
			if (!['undefined', 'null'].includes(String(refreshToken)) && !originalRequest._retry) {
				delete originalRequest.headers[authToken];
				try {
					const res = await getAuthToken(refreshToken);
					if ([200, 201].includes(res.status)) {
						await setAuthHeader(res.data);
						originalRequest._retry = true;
						originalRequest.headers[authToken] = `Bearer ${res.data.accessToken}`;
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

