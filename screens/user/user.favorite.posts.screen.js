import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const UserFavoritePostScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>Favorite Post</Text>
		</View>
	);
};

UserFavoritePostScreen.navigationOptions = {
	headerTitle: 'Favorite Posts'
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});

export default UserFavoritePostScreen;
