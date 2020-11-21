import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import Color from '../constants/color.constant';

const PlacesList = ({ data, navigation }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.6}
			onPress={() =>
				navigation.navigate({
					routeName: 'PlaceDetails',
					params: {
						placeId: data.id,
						placeTitle: data.title
					}
				})}
		>
			<View style={styles.list}>
				<Image source={{ uri: data.image }} style={styles.listImage} />
				<View style={styles.details}>
					<Text>{data.title}</Text>
					<Text style={styles.address}>{data.address}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	list: {
		borderBottomWidth: 1,
		borderBottomColor: Color.dark,
		backgroundColor: '#ffffff',
		paddingVertical: 15,
		paddingHorizontal: 30,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 2
	},
	listImage: {
		width: 60,
		height: 60,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: Color.dark,
		marginRight: 20
	},
	details: {
		justifyContent: 'center',
		flex: 1
	},
	address: {
		color: '#888',
		fontSize: 12
	}
});

export default PlacesList;
