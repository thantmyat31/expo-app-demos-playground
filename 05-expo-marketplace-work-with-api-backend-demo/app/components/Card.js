import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import AppText from './AppText';

import colors from '../config/colors';

const Card = ({ title, subTitle, imageUrl, thumbnailUrl, onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.card}>
				<Image style={styles.image} tint="light" preview={{ uri: thumbnailUrl }} uri={imageUrl} />
				<View style={styles.textContainer}>
					<AppText style={styles.title}>{title}</AppText>
					<AppText style={styles.subTitle}>{subTitle}</AppText>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 15,
		backgroundColor: colors.white,
		marginBottom: 20,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: 200
	},
	textContainer: {
		padding: 20
	},
	title: {
		marginBottom: 7
	},
	subTitle: {
		color: colors.secondary,
		fontWeight: 'bold'
	}
});

export default Card;
