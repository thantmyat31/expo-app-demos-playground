import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DefaultText } from './DefaultText.component';

const MealItem = ({ data, onPress }) => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity activeOpacity={0.6} onPress={onPress}>
				<View style={{ ...styles.meal, ...styles.header }}>
					<ImageBackground source={{ uri: data.item.imageUrl }} style={styles.bgImage}>
						<View style={styles.titleContainer}>
							<Text style={styles.title} numberOfLines={1}>
								{data.item.title}
							</Text>
						</View>
					</ImageBackground>
				</View>
				<View style={{ ...styles.mealRow, ...styles.details }}>
					<DefaultText>{data.item.duration}m</DefaultText>
					<DefaultText>{data.item.complexity.toUpperCase()}</DefaultText>
					<DefaultText>{data.item.affordability.toUpperCase()}</DefaultText>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		flex: 1,
		width: '100%',
		height: 200,
		backgroundColor: '#f5f5f5',
		marginBottom: 15,
		borderRadius: 10,
		overflow: 'hidden',
		elevation: 3
	},
	mealRow: {
		flexDirection: 'row'
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end'
	},
	titleContainer: {
		width: '100%',
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingHorizontal: 10,
		paddingVertical: 5,
		alignItems: 'center'
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		color: '#ffffff'
	},
	header: {
		height: '85%'
	},
	details: {
		height: '15%',
		backgroundColor: '#ffffff',
		paddingHorizontal: 10,
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});

export default MealItem;
