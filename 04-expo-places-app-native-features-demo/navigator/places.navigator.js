import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Color from '../constants/color.constant';
import PlacesScreen from './../screens/places.screen';
import PlaceDetailsScreen from './../screens/placeDetails.screen';
import NewPlaceFormScreen from './../screens/newPlaceForm.screen';
import MapScreen from './../screens/map.screen';

const defaultStackNavigationOptions = {
	headerTitle: 'Great Places',
	headerStyle: {
		backgroundColor: Color.primary
	},
	headerTintColor: '#ffffff'
};

const PlacesNavigator = createStackNavigator(
	{
		Places: {
			screen: PlacesScreen
		},
		PlaceDetails: {
			screen: PlaceDetailsScreen
		},
		NewPlaceForm: {
			screen: NewPlaceFormScreen
		},
		Map: {
			screen: MapScreen
		}
	},
	{
		defaultNavigationOptions: defaultStackNavigationOptions
	}
);

export default createAppContainer(PlacesNavigator);
