import { combineReducers } from 'redux';
import messageReducer from './message/message.reducer';
import userReducer from './user/user.reducer';
import newsReducer from './news/news.reducer';

const rootReducer = combineReducers({
	message: messageReducer,
	user: userReducer,
	news: newsReducer
});

export default rootReducer;
