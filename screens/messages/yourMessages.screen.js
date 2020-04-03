import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Color from './../../constants/colors.constant';

const YourMessagesScreen = () => {
	return (
		<View style={styles.screen}>
			<View style={styles.messageContainer}>
				<Text style={styles.title}>Your message screen</Text>
				<Text>Long text message is here</Text>
			</View>
		</View>
	);
};

YourMessagesScreen.navigationOptions = {
	headerTitle: 'Your Messages'
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	messageContainer: {
		paddingHorizontal: 20,
		paddingVertical: 30,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc'
	},
	title: {
		fontSize: 18
	}
});

export default YourMessagesScreen;
