import { MEALS } from './../../data/meal.data';
import { TOGGLE_FAVORITE, SET_FILTERS } from './../types/meal.type';

const INITIAL_STATE = {
	meals: MEALS,
	mealsFiltered: MEALS,
	mealsFavorite: []
};

const mealReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			const newItem = state.meals.find((meal) => meal.id === action.payload);
			const isExistMeal = state.mealsFavorite.find((meal) => meal.id === newItem.id);
			if (isExistMeal) {
				const updatedMeal = state.mealsFavorite.filter((meal) => meal.id !== newItem.id);

				return {
					...state,
					mealsFavorite: [ ...updatedMeal ]
				};
			} else {
				return {
					...state,
					mealsFavorite: [ newItem, ...state.mealsFavorite ]
				};
			}

		case SET_FILTERS:
			const appliedFilter = action.payload;
			const updatedMealsFiltered = state.meals.filter((meal) => {
				if (!meal.isGlutenFree && appliedFilter.glutenFree) return false;
				if (!meal.isLactoseFree && appliedFilter.lactoseFree) return false;
				if (!meal.isVegan && appliedFilter.vegan) return false;
				if (!meal.isVegetarian && appliedFilter.vegetarian) return false;
				return true;
			});

			return {
				...state,
				mealsFiltered: updatedMealsFiltered
			};

		default:
			return state;
	}
};

export default mealReducer;
