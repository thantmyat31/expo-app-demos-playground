import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MessageDetailsScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>Message Details Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});

export default MessageDetailsScreen;
