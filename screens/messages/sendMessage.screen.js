import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, CheckBox } from 'react-native';

import Color from './../../constants/colors.constant';
import { TextInput } from 'react-native-gesture-handler';

const SendMessageScreen = () => {
	const [ dateTime, setDateTime ] = useState();
	const [ isSelected, setSelection ] = useState(false);

	const setDateAndTime = () => {
		const newDate = new Date();
		const date = newDate.toLocaleDateString();
		const time = newDate.toLocaleTimeString();
		setDateTime(`${date}`);
	};

	useEffect(() => {
		setDateAndTime();
	}, []);

	return (
		<View style={styles.screen}>
			<View style={styles.dateTime}>
				<Text>Note date</Text>
				<Text>{dateTime}</Text>
			</View>
			<View style={styles.options}>
				<View style={styles.option}>
					<CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
					<Text style={styles.optionText}>Information</Text>
				</View>
				<View style={styles.option}>
					<CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} />
					<Text style={styles.optionText}>Suggestion</Text>
				</View>
			</View>
			<View style={styles.details}>
				<Text style={styles.label}>Messages</Text>
				<TextInput style={styles.input} placeholder="messages" />
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
		borderBottomColor: '#ccc',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	options: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1
	},
	option: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 5
	},
	optionText: {
		fontSize: 16,
		paddingLeft: 20
	},
	details: {
		paddingHorizontal: 20,
		paddingVertical: 20
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		paddingVertical: 10
	}
});

export default SendMessageScreen;
