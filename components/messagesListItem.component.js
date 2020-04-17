import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const MessagesListItem = ({ onPress, data }) => {
	const shortMessage = data.message.length < 50 ? data.message : data.message.substring(0, 50) + '...';
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={onPress}>
			<View style={styles.messageContainer}>
				<Text style={styles.title}>{data.title}</Text>
				<Text style={styles.message}>{shortMessage}</Text>
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
