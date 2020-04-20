import userTypes from './user.type';

export const userLoginAction = (user) => ({
	type: userTypes.USER_LOGGEDIN,
	payload: user
});

export const userLogoutAction = () => ({
	type: userTypes.USER_LOGGEDOUT
});

export const userProfileUpdateAction = (data) => ({
	type: userTypes.USER_PROFILE_UPDATE,
	payload: data
});

export const addFavoritePostAction = (post) => ({
	type: userTypes.ADD_FAVORITE_POST,
	payload: post
});
