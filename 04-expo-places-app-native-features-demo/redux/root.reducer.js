import { combineReducers } from 'redux';
import placesReducer from './places/places.reducer';

const rootReducer = combineReducers({
	places: placesReducer
});

export default rootReducer;
