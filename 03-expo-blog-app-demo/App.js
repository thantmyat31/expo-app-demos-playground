import React from 'react';
import MainNavigator from './navigation/navigation';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'react-native-gesture-handler';

export default function App() {
	return (
		<Provider store={store}>
			<MainNavigator />
		</Provider>
	);
}
