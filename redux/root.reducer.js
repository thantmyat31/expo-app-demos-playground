import { combineReducers } from 'redux';
import messageReducer from './message/message.reducer';

const rootReducer = combineReducers({
    message: messageReducer
});

export default rootReducer;