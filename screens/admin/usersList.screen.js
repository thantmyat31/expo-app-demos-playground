import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MenuIcon from '../../components/menuIcon.component';

const UsersListScreen = ({ navigation }) => {
	const userDataType = navigation.getParam('userData');
	console.log(userDataType);
	return (
		<View style={styles.screen}>
			<Text>Users List Screen</Text>
			<Text>User Types {userDataType}</Text>
		</View>
	);
};

UsersListScreen.navigationOptions = ({ navigation }) => {
	return {
		headerTitle: 'Users List',
		headerLeft: () => <MenuIcon onPress={() => navigation.toggleDrawer()} />
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});

export default UsersListScreen;
