import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './../screens/landing.screen';
import LoginScreen from './../screens/login.screen';
import RegisterScreen from './../screens/register.screen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Landing"
				component={LandingScreen}
				options={{
					headerShown: false
				}}
			/>
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Register" component={RegisterScreen} />
		</Stack.Navigator>
	);
};

export default AuthNavigator;
