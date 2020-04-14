import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const MessagesListItem = ({ onPress, data }) => {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={onPress}>
			<View style={styles.messageContainer}>
				<Text style={styles.title}>{data.title}</Text>
				<Text style={styles.message}>{data.message}</Text>
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
