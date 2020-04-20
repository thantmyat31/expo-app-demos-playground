import userTypes from './user.type';
import USER_DATA from './../../data/user.data';

const INITIAL_STATE = {
	users: USER_DATA,
	currentUser: undefined
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userTypes.USER_LOGGEDIN:
			return {
				...state,
				currentUser: action.payload
			};

		case userTypes.USER_LOGGEDOUT:
			return {
				...state,
				currentUser: undefined
			};

		case userTypes.USER_PROFILE_UPDATE:
			const updatedUser = { ...state.currentUser, ...action.payload };
			return {
				...state,
				currentUser: updatedUser,
				users: state.users.map((user) => (user.id === state.currentUser.id ? updatedUser : user))
			};

		case userTypes.ADD_FAVORITE_POST:
			if (!state.currentUser) {
				return state;
			}
			let newFavoritePosts = [];
			if (state.currentUser.favoritePosts) {
				if (state.currentUser.favoritePosts.indexOf(action.payload) !== -1) {
					newFavoritePosts = state.currentUser.favoritePosts.filter((post) => post !== action.payload);
				} else {
					newFavoritePosts = [ ...state.currentUser.favoritePosts, action.payload ];
				}
			} else {
				newFavoritePosts = [ action.payload ];
			}
			return {
				...state,
				currentUser: {
					...state.currentUser,
					favoritePosts: newFavoritePosts
				}
			};

		default:
			return state;
	}
};

export default userReducer;
