import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

import ListingEditScreen from './../screens/listingEdit.screen';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: colors.primary,
				inactiveTintColor: colors.medium,
				style: {
					// backgroundColor: 'red',
					marginBottom: 0,
					paddingBottom: 10,
					height: 65
				}
			}}
		>
			<Tab.Screen
				name="Feed"
				component={FeedNavigator}
				options={{
					tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} />
				}}
			/>
			<Tab.Screen
				name="ListingEdit"
				component={ListingEditScreen}
				options={({ navigation }) => ({
					tabBarButton: () => <NewListingButton onPress={() => navigation.navigate('ListingEdit')} />,
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons name="plus-circle" size={size} color={color} />
					)
				})}
			/>
			<Tab.Screen
				name="Account"
				component={AccountNavigator}
				options={{
					title: 'Feed',
					tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} />
				}}
			/>
		</Tab.Navigator>
	);
};

export default AppNavigator;
