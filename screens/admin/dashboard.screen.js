import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import MenuIcon from '../../components/menuIcon.component';

import DashboardIcon from '../../components/dashboardIcon.component';
import { connect } from 'react-redux';

const DashboardScreen = ({ navigation, users }) => {
	const usersAll = users.length;
	const usersOnline = users.filter((u) => u.status.network.toLowerCase() === 'online').length;
	const usersMuted = users.filter((u) => u.status.type.toLowerCase() === 'muted').length;
	return (
		<View style={styles.screen}>
			<ScrollView style={styles.container}>
				<View style={styles.row}>
					<DashboardIcon
						label="All Users"
						iconName="md-people"
						value={usersAll}
						onPress={() => navigation.navigate({ routeName: 'UsersList', params: { userData: 'all' } })}
					/>
					<DashboardIcon
						label="Online Users"
						iconName="md-wifi"
						value={usersOnline}
						onPress={() => navigation.navigate({ routeName: 'UsersList', params: { userData: 'online' } })}
					/>
					<DashboardIcon
						label="Muted Users"
						iconName="md-volume-off"
						value={usersMuted}
						onPress={() => navigation.navigate({ routeName: 'UsersList', params: { userData: 'muted' } })}
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
		flexWrap: 'wrap',
		justifyContent: 'space-around'
	}
});

const mapStateToProps = (state) => ({
	users: state.user.users
});

export default connect(mapStateToProps)(DashboardScreen);
