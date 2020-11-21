import 'react-native-gesture-handler';

import React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';

const App = () => {
	return (
		<React.Fragment>
			<OfflineNotice />
			<NavigationContainer theme={navigationTheme}>
				<AppNavigator />
			</NavigationContainer>
		</React.Fragment>
	);
};

export default App;
