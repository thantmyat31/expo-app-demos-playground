import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';

import { Provider } from 'react-redux';
import store from './redux/store';

import { enableScreens } from 'react-native-screens';

enableScreens();

export default function App() {
	const [ fontLoaded, setFontLoaded ] = useState(false);

	const fectchFonts = () => {
		return Font.loadAsync({
			'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
			'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
		});
	};
	if (!fontLoaded) {
		return <AppLoading startAsync={fectchFonts} onFinish={() => setFontLoaded(true)} />;
	}
	return (
		<Provider store={store}>
			<MealsNavigator />
		</Provider>
	);
}
