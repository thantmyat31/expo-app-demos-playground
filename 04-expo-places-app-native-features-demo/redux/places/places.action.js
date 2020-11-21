import placesActionTypes from './places.type';
import * as FileSystem from 'expo-file-system';
import { fetchPlaces, insertPlace, deletePlace } from './../../helpers/db';
import ENV from './../../env';

export const addNewPlace = (title, imageUri, location) => {
	return async (dispatch) => {
		const response = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${ENV.googleMapApi}`
		);

		if (!response.ok) {
			throw new Error('Something went wrong!');
		}

		const resData = await response.json();
		if (!resData.results) {
			throw new Error('Something went wrong!');
		}

		const address = resData.results[0].formatted_address;

		const fileName = imageUri.split('/').pop();
		const newPath = FileSystem.documentDirectory + fileName;
		try {
			await FileSystem.moveAsync({
				from: imageUri,
				to: newPath
			});
			const dbResult = await insertPlace(title, newPath, address, location.lat, location.lng);
			dispatch({
				type: placesActionTypes.ADD_PLACE,
				payload: {
					id: dbResult.insertId,
					title: title,
					imageUri: newPath,
					address: address,
					coords: { lat: location.lat, lng: location.lng }
				}
			});
		} catch (err) {
			console.log(err);
			throw err;
		}
	};
};

export const getPlacesAction = () => {
	return async (dispatch) => {
		try {
			const dbResult = await fetchPlaces();
			console.log(dbResult.rows._array.length);
			dispatch({
				type: placesActionTypes.GET_PLACES,
				payload: dbResult.rows._array
			});
		} catch (err) {
			throw err;
		}
	};
};

export const deletePlaceAction = (id) => {
	return async (dispatch) => {
		try {
			deletePlace(id);
			dispatch({
				type: placesActionTypes.DELETE_PLACE,
				payload: id
			});
		} catch (err) {
			throw err;
		}
	};
};
