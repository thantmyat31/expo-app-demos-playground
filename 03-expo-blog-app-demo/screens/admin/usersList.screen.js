import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import { connect } from 'react-redux';

import MenuIcon from '../../components/menuIcon.component';
import UserListItem from '../../components/userListItem.component';
import ColorDefinition from '../../components/ColorDefinition.component';
import SearchBox from '../../components/searchbox.component';

const UsersListScreen = (props) => {
	const userData = props.navigation.getParam('userData');
	const [ usersList, setUsersList ] = useState();
	const [ onSearch, setOnSearch ] = useState(false);
	const [ searchItem, setSearchItem ] = useState();

	const getUsers = () => {
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
			if (userData === 'search') {
				setOnSearch(true);
			}
		}
	};

	useEffect(() => {
		getUsers();
	}, []);

	const handleOnPageFocus = () => {
		if (userData === 'search') {
			handleOnSearch(searchItem);
		}
		getUsers();
	};

	const handleOnSearch = (text = '') => {
		let userSearched = [];

		if (text.trim() !== '') {
			userSearched = props.users.filter(
				(user) => user.username.startsWith(text.trim()) || user.email.startsWith(text.trim())
			);
			setSearchItem(text.trim());
			setUsersList(userSearched);
		} else {
			userSearched = [];
			setUsersList(userSearched);
		}
	};

	return (
		<View style={styles.screen}>
			<View style={styles.container}>
				<NavigationEvents onDidFocus={handleOnPageFocus} />
				<ColorDefinition />
				{onSearch && <SearchBox onChangeText={(text) => handleOnSearch(text)} />}
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
		headerLeft: () => <MenuIcon iconName="md-menu" onPress={() => navigation.toggleDrawer()} />
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
