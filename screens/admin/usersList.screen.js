import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import MenuIcon from '../../components/menuIcon.component';
import UserListItem from '../../components/userListItem.component';
import ColorDefinition from '../../components/ColorDefinition.component';

const UsersListScreen = (props) => {
	const userData = props.navigation.getParam('userData');
	const routeName = props.navigation.state.routeName;
	const [ usersList, setUsersList ] = useState();

	useEffect(() => {
		if (!userData) {
			setUsersList(props.users);
		} else {
			if (userData === 'all') {
				setUsersList(props.users);
			}
			if (userData === 'online') {
				setUsersList(props.users.filter((user) => user.status.network === 'online'));
			}
			if (userData === 'muted') {
				setUsersList(props.users.filter((user) => user.status.type === 'muted'));
			}
		}
	}, []);

	return (
		<View style={styles.screen}>
			<View style={styles.container}>
				<ColorDefinition />
				<FlatList
					style={styles.flatList}
					keyExtractor={(item, index) => item.id}
					data={usersList}
					renderItem={(itemData) => <UserListItem navigation={props.navigation} data={itemData.item} />}
				/>
			</View>
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
	},
	container: {
		flex: 1,
		padding: 10
	},
	flatList: {
		paddingTop: 10
	}
});

const mapStateToProps = (state) => ({
	users: state.user.users
});

export default connect(mapStateToProps)(UsersListScreen);
