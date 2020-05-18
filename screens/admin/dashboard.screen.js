import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MenuIcon from '../../components/menuIcon.component';

import DashboardIcon from '../../components/dashboardIcon.component';

const DashboardScreen = ({ navigation }) => {
	const handleOnNavigateUsers = (data) => {
		navigation.navigate({ routeName: 'UsersList', params: { userData: data } });
		console.log(data);
	};
	return (
		<View style={styles.screen}>
			<ScrollView style={styles.container}>
				<View style={styles.row}>
					<DashboardIcon
						label="All Users"
						iconName="md-people"
						value="20k+"
						onPress={() => handleOnNavigateUsers('all')}
					/>
					<DashboardIcon
						label="Online Users"
						iconName="md-wifi"
						value="235"
						onPress={() => handleOnNavigateUsers('online')}
					/>
					<DashboardIcon
						label="Muted Users"
						iconName="md-volume-off"
						value="43"
						onPress={() => handleOnNavigateUsers('muted')}
					/>
					<DashboardIcon label="Inbox" iconName="md-mail" value="500" />
					<DashboardIcon label="Replied" iconName="md-mail-open" value="100" />
					<DashboardIcon label="Unread" iconName="md-mail-unread" value="15" />
				</View>
			</ScrollView>
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
		alignItems: 'center'
	},
	container: {
		padding: 10
	},
	row: {
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
});

export default DashboardScreen;
