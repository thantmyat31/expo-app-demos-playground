import placesActionTypes from './places.type';

const INITIAL_STATE = {
	places: []
};

const placesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case placesActionTypes.GET_PLACES:
			const getAllPlaces = action.payload.map((place) => ({
				id: place.id.toString(),
				title: place.title,
				image: place.imageUri,
				address: place.address,
				lat: place.lat,
				lng: place.lng
			}));
			const placeRsorted = getAllPlaces.reverse();
			return {
				...state,
				places: placeRsorted
			};
		case placesActionTypes.ADD_PLACE:
			const newPlace = {
				id: action.payload.id.toString(),
				title: action.payload.title,
				image: action.payload.imageUri,
				address: action.payload.address,
				lat: action.payload.coords.lat,
				lng: action.payload.coords.lng
			};
			return {
				...state,
				places: [ newPlace, ...state.places ]
			};

		case placesActionTypes.DELETE_PLACE:
			return {
				...state,
				places: state.places.filter((p) => p.id !== action.payload)
			};

		default:
			return state;
	}
};

export default placesReducer;
