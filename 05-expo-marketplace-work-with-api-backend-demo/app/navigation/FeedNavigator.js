import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from './../screens/listings.screen';
import ListingDetailsScreen from './../screens/listingDetails.screen';

const Stack = createStackNavigator();

const FeedNavigator = () => {
	return (
		<Stack.Navigator
			mode="card"
			screenOptions={{
				headerShown: false
			}}
		>
			<Stack.Screen name="Listings" component={ListingsScreen} />
			<Stack.Screen
				name="ListingDetails"
				component={ListingDetailsScreen}
				options={{
					title: 'Listing Details'
				}}
			/>
		</Stack.Navigator>
	);
};

export default FeedNavigator;
