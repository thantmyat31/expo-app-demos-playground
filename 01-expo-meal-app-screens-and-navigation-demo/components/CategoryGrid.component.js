import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, View, Text, StyleSheet, Platform } from 'react-native';

const CategoryGrid = ({ onPress, title, color }) => {
	let TouchableComponent = TouchableOpacity;
	if (Platform.OS === 'android' && Platform.Version >= 21) {
		TouchableComponent = TouchableNativeFeedback;
	}
	return (
		<View style={{ ...styles.gridItem }}>
			<TouchableComponent style={styles.touchableComponent} onPress={onPress}>
				<View style={{ ...styles.container, backgroundColor: color }}>
					<Text style={styles.title} numberOfLines={2}>
						{title}
					</Text>
				</View>
			</TouchableComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		elevation: 3,
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 10,
		borderRadius: 10,
		overflow: 'hidden'
	},
	touchableComponent: {
		flex: 1
	},
	container: {
		flex: 1,
		padding: 10,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		borderRadius: 10
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		textAlign: 'right'
	}
});

export default CategoryGrid;
