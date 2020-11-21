import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { CustomFonts } from './customFonts.component';

const ProductItemComponent = ({ item, onViewDetails, children }) => {
	const { title, price, imageUrl } = item;

	return (
		<View style={styles.itemContainer}>
			<TouchableOpacity style={styles.itemWrapper} activeOpacity={0.8} onPress={onViewDetails} useForeground>
				<View>
					<Image style={styles.image} source={{ uri: imageUrl }} />
					<View style={styles.details}>
						<CustomFonts style={styles.title}>{title}</CustomFonts>
						<CustomFonts style={styles.price}>${price.toFixed(2)}</CustomFonts>
					</View>
					{children}
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	itemContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		marginVertical: 10,
		backgroundColor: '#ffffff',
		elevation: 3,
		overflow: 'hidden'
	},
	itemWrapper: {
		width: '100%'
	},
	image: {
		width: '100%',
		height: 200
	},
	details: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10
	},
	title: {
		fontSize: 20,
		marginTop: 10
	},
	price: {
		color: '#888'
	}
});

export default ProductItemComponent;
