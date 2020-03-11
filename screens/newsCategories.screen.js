import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NewsCategoriesScreen = (props) => {
	const { navigation } = props;
	return (
		<View style={styles.screen}>
			<Text>News Categories</Text>
			<Button title="News" onPress={() => navigation.navigate({ routeName: 'News' })} />
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

export default NewsCategoriesScreen;
