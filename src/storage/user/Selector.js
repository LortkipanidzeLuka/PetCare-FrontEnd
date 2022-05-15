import { createSelector } from '@reduxjs/toolkit';

export const userSelectors = {
	userInfo: createSelector(
		(state) => state.user,
		user => user.userInfo
	),

	userInitials: createSelector(
		(state) => state.user,
		user =>
			user.userInfo?.fname && user.userInfo?.lname
				? `${String(user.userInfo.fname).charAt(0)}${String(user.userInfo.lname).charAt(0)}`
				: ''
	)
};

