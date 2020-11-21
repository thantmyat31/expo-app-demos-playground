import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from './../screens/account.screen';
import MessagesScreen from './../screens/messages.screen';

const Stack = createStackNavigator();

const AccountNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
			<Stack.Screen name="Messages" component={MessagesScreen} />
		</Stack.Navigator>
	);
};

export default AccountNavigator;
