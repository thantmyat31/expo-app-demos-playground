import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const TopScreen = (props) => {
	const { navigation } = props;
	return (
		<View style={styles.screen}>
			<View style={styles.wrapper}>
				<TouchableOpacity
					style={styles.btn}
					activeOpacity={0.6}
					onPress={() => navigation.navigate({ routeName: 'About' })}
				>
					<Text style={styles.btnName}>About</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btn}
					activeOpacity={0.6}
					onPress={() => navigation.navigate({ routeName: 'Guide' })}
				>
					<Text style={styles.btnName}>Guide</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.wrapper}>
				<TouchableOpacity
					style={styles.btn}
					activeOpacity={0.6}
					onPress={() => navigation.navigate({ routeName: 'NewsCategories' })}
				>
					<Text style={styles.btnName}>News Categories</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btn}
					activeOpacity={0.6}
					onPress={() => navigation.navigate({ routeName: 'Activities' })}
				>
					<Text style={styles.btnName}>Activities</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

TopScreen.navigationOptions = {
	headerShown: false
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	wrapper: {
		paddingHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: 'blue'
	},
	btn: {
		flex: 1,
		margin: 10,
		backgroundColor: 'red',
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	btnName: {
		color: '#ffffff'
	}
});

export default TopScreen;
