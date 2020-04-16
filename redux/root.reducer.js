import { combineReducers } from 'redux';
import messageReducer from './message/message.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
	message: messageReducer,
	user: userReducer
});

export default rootReducer;
