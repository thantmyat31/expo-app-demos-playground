import userTypes from './user.type';

export const userLoginAction = (user) => ({
	type: userTypes.USER_LOGGEDIN,
	payload: user
});
