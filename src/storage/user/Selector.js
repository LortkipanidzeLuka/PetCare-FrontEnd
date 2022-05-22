import { createSelector } from '@reduxjs/toolkit';

export const userSelectors = {
	userInfo: createSelector(
		(state) => state.user,
		user => user.userInfo
	),
	isLoggedIn: createSelector(
		(state) => state.user,
		user => user.isLoggedIn
	),
	requiresVerification: createSelector(
		(state) => state.user,
		user => {
			return user.userInfo && !user.userInfo.is_verified && user.isLoggedIn
		}
	),
	userInitials: createSelector(
		(state) => state.user,
		user => {
			return user.userInfo?.full_name && user.userInfo?.full_name.includes(' ')
				? `${user.userInfo?.full_name[0].toUpperCase() + '.' + user.userInfo?.full_name.split(' ')[1]}`
				: user.userInfo?.full_name ? user.userInfo?.full_name : '';
		}
	)
};

