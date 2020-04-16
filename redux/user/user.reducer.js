import userTypes from './user.type';

const INITIAL_STATE = {
	currentUser: undefined
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userTypes.USER_LOGGEDIN:
			return {
				...state,
				currentUser: action.payload
			};

		default:
			return state;
	}
};

export default userReducer;
