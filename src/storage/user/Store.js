import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
	userInfo: null,
	loading: false,
	isLoggedIn: false
};

// slice
const UserActions = createSlice({
	name: 'user',
	initialState: initialUserState,
	reducers: {
		loginStartAction: () => ({ ...initialUserState, loading: true }),
		loginSuccessAction: (state, action) => {
			console.log(state, action.payload)
			return {
			...state,
			userInfo: action.payload,
			loading: false,
			isLoggedIn: true
		}},
		logoutAction: () => initialUserState
	}
});

export default UserActions;
