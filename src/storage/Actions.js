import storage from '../utils/Storage';
import jwt_decode from 'jwt-decode';
import UserActions from './user/Store';
import { deleteAuthHeader, setAuthHeader } from '../services/axios';

export const updateUserStore = ({dispatch}) => {
	if (storage('accessToken').isSet()) {
		const data = jwt_decode(storage('accessToken').get());
		dispatch(UserActions.actions.loginSuccessAction(data));
	}
};

export const logout = ({dispatch}) => {
	deleteAuthHeader();
	dispatch(UserActions.actions.logoutAction())
};

export const loginUser = async ({data, dispatch})=> {
	await setAuthHeader(data)
	dispatch(UserActions.actions.loginSuccessAction(jwt_decode(data.accessToken)));
}
