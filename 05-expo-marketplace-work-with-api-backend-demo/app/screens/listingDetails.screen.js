import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import ListItem from './../components/lists/ListItem';

import colors from '../config/colors';

const ListingDetailsScreen = ({ route }) => {
	const { id, images, title, price } = route.params;

	console.log(route.params);

	return (
		<ScrollView>
			<View style={styles.screen}>
				<Image style={styles.image} preview={{ uri: images[0].thumbnailUrl }} tint="light" uri={images[0].url} />
				<View style={styles.textContainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.price}>${price}</Text>
					<View style={styles.userContainer}>
						<ListItem
							image={require('./../assets/image/thant.jpg')}
							title="Thant Myat"
							subTitle="5 Listings"
						/>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	image: {
		width: '100%',
		height: 300
	},
	textContainer: {
		padding: 20
	},
	title: {
		fontSize: 24
	},
	price: {
		color: colors.secondary,
		fontSize: 20,
		fontWeight: 'bold',
		paddingVertical: 10
	},
	userContainer: {
		marginVertical: 40
	}
});

export default ListingDetailsScreen;
