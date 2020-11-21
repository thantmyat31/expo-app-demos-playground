import React from 'react';
import MainNavigator from './navigator/places.navigator';
import { Provider } from 'react-redux';
import store from './redux/store';

import { init } from './helpers/db';

init().then(() => console.log('Initialized database')).catch((err) => {
	console.log('Initialize db failed');
	console.log(err);
});

export default function App() {
	return (
		<Provider store={store}>
			<MainNavigator />
		</Provider>
	);
}
