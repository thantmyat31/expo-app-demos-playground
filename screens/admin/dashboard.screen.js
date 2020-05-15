import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MenuIcon from '../../components/menuIcon.component';

const DashboardScreen = () => {
	return (
		<View style={styles.screen}>
			<Text>Admin Dashboard</Text>
		</View>
	);
};

DashboardScreen.navigationOptions = ({ navigation }) => {
	return {
		headerTitle: 'Dashboard',
		headerLeft: () => <MenuIcon onPress={() => navigation.toggleDrawer()} />
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default DashboardScreen;
