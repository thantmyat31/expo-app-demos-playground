import { combineReducers } from 'redux';
import mealReducer from './reducers/meal.reducer';

const rootReducer = combineReducers({
	meal: mealReducer
});

export default rootReducer;
