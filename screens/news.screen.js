import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NewsScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>News Screen</Text>
			<Button title="go to news" onPress={() => console.log('pressed')} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default NewsScreen;
