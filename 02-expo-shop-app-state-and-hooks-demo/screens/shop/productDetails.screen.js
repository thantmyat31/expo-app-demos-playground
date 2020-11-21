import React from 'react';
import { StyleSheet, View, Image, Button, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import Color from './../../constants/colors.constant';
import { CustomFonts } from './../../components/customFonts.component';
import { addCartAction } from './../../redux/cart/cart.action';

const ProductDetailsScreen = ({ navigation, products, addToCart }) => {
	const productId = navigation.getParam('productId');
	const selectedProduct = products.find((prod) => prod.id === productId);

	return (
		<ScrollView>
			<View style={styles.screen}>
				<Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
				<View style={styles.btn}>
					<Button title="Add to cart" color={Color.primary} onPress={() => addToCart(selectedProduct.id)} />
				</View>
				<CustomFonts style={styles.price}>${selectedProduct.price}</CustomFonts>
				<CustomFonts style={styles.description}>{selectedProduct.description}</CustomFonts>
			</View>
		</ScrollView>
	);
};

ProductDetailsScreen.navigationOptions = (navigationData) => {
	const title = navigationData.navigation.getParam('productTitle');
	return { headerTitle: title };
};

const styles = StyleSheet.create({
	screen: {
		alignItems: 'center'
	},
	image: {
		width: '100%',
		height: 300
	},
	btn: {
		width: 150,
		marginVertical: 20
	},
	price: {
		fontSize: 18,
		color: '#888',
		marginBottom: 20
	},
	description: {
		paddingHorizontal: 20,
		textAlign: 'center'
	}
});

const mapStatetoProps = (state) => ({
	products: state.product.avaliableProducts
});

const mapDispatchToProps = (dispatch) => ({
	addToCart: (itemId) => dispatch(addCartAction(itemId))
});

export default connect(mapStatetoProps, mapDispatchToProps)(ProductDetailsScreen);
