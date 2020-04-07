import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from './../../constants/colors.constant';

const SendMessageScreen = () => {
	const [ dateTime, setDateTime ] = useState();
	const setDateAndTime = () => {
		const newDate = new Date();
		const date = newDate.toLocaleDateString();
		const time = newDate.toLocaleTimeString();
		setDateTime(`${date} ${time}`);
	};

	useEffect(() => {
		setDateAndTime();
	}, []);

	// setInterval(setDateAndTime, 1000);

	return (
		<View style={styles.screen}>
			<View style={styles.dateTime}>
				<Text>Note date</Text>
				<Text>{dateTime}</Text>
			</View>
		</View>
	);
};

SendMessageScreen.navigationOptions = {
	headerTitle: 'Your Messages'
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	dateTime: {
		paddingHorizontal: 20,
		paddingVertical: 30,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc'
	}
});

export default SendMessageScreen;
