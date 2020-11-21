import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Screen from '../components/Screen';

import ListItem from '../components/lists/ListItem';
import ListItemSeparator from './../components/lists/ListItemSeparator';
import Icon from '../components/Icon';

import colors from '../config/colors';
import routes from '../navigation/routes';

const menuItems = [
	{
		id: 'I1',
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted-square',
			backgroundColor: colors.primary
		}
	},
	{
		id: 'I2',
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary
		},
		targetScreen: routes.MESSAGES
	}
];

const AccountScreen = ({ navigation }) => {
	return (
		<Screen style={styles.screen}>
			<View style={styles.container}>
				<ListItem
					title="Thant Myat Sin"
					subTitle="thantmyat1234@gmail.com"
					image={require('./../assets/image/thant.jpg')}
				/>
			</View>
			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(item) => item.id}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item }) => (
						<ListItem
							showChevrons
							title={item.title}
							onPress={() => navigation.navigate(item.targetScreen)}
							IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
						/>
					)}
				/>
			</View>
			<ListItem showChevrons title="Log Out" IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />} />
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light
	},
	container: {
		marginVertical: 20
	}
});

export default AccountScreen;
