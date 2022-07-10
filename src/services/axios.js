import axios from 'axios';
import storage from '../utils/Storage';
// import { useDispatch } from 'react-redux';
// import UserActions from '../storage/user/Store';

const baseURL = process.env.REACT_APP_API_BASE_URL;
export const authToken = String(process.env.REACT_APP_AUTH_TOKEN);
// const dispatch = useDispatch()

let authTokenRequest;

const instance = axios.create({ baseURL });
const noAuth = axios.create({ baseURL });

//TODO UNCOMMENT
// const instance = axios.create({
// 	baseURL,
// 	headers: {
// 		'Access-Control-Allow-Origin': '*'
// 	}
// });
// const noAuth = axios.create({
// 	baseURL,
// 	headers: {
// 		common:{
// 			'Access-Control-Allow-Origin': '*'
// 		}
// 	}
// });
// instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// noAuth.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

function resetAuthTokenRequest() {
	authTokenRequest = null;
}

export const deleteAuthHeader = () => {
	storage('accessToken').unset();
	storage('refreshToken').unset();
	delete instance.defaults.headers.common[authToken];
	// TODO
	// window.location.reload();
};

export const checkAuthHeader = () => {

	if (storage('accessToken').isSet()) {
		instance.defaults.headers.common[authToken] = `Bearer ${storage('accessToken').get()}`;
	}
};


export const setAuthHeader = async (response) => {
	storage('accessToken').set(response.accessToken);
	storage('refreshToken').set(response.refreshToken);
	instance.defaults.headers.common[authToken] = `Bearer ${response.accessToken}`;
	return Promise.resolve();
};

export async function refreshToken() {
	const refreshTokenStr = storage('refreshToken').get();
	try {
		const res = await getAuthToken(refreshTokenStr);
		if ([200, 201].includes(res.status)) {
			await setAuthHeader(res.data);
		}
	} catch (error) {
		deleteAuthHeader();
		return Promise.reject(error?.response?.data?.errorCode ? error?.response?.data?.errorCode : 'univerisal');
	}
}

function getAuthToken(refreshToken) {
	if (!authTokenRequest) {
		authTokenRequest = noAuth.post('/auth/refresh', { refreshToken }, { headers: {} });
		authTokenRequest.then(resetAuthTokenRequest, resetAuthTokenRequest);
	}
	return authTokenRequest;
}

checkAuthHeader();
instance.interceptors.response.use(
	res => res,
	async (error) => {
		const originalRequest = error.config;

		if (error.response?.status === 401) {
			const refreshToken = storage('refreshToken').get();
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
					deleteAuthHeader();
					return Promise.reject(error?.response?.data?.errorCode ? error?.response?.data?.errorCode : 'univerisal');
				}
			} else {
				deleteAuthHeader();
				return Promise.reject(error?.response?.data?.errorCode ? error?.response?.data?.errorCode : 'univerisal');
			}
		}
		if (error?.response?.data?.errorCode === 'otp_retries_exceeded') {
			deleteAuthHeader();
		}
		return Promise.reject(error?.response?.data?.errorCode ? error?.response?.data?.errorCode : 'univerisal');
	}
);
export const { get, post, put, delete: del } = instance;

