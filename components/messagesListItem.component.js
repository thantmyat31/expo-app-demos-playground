import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const MessagesListItem = ({ onPress }) => {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={onPress}>
			<View style={styles.messageContainer}>
				<Text style={styles.title}>Your message screen</Text>
				<Text style={styles.message}>Long text message is here</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	messageContainer: {
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc'
	},
	title: {
		fontSize: 18,
		marginBottom: 5
	},
	message: {
		color: '#888'
	}
});

export default MessagesListItem;
