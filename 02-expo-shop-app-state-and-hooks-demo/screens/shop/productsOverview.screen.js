import React, { useEffect } from 'react';
import { StyleSheet, FlatList, Platform, Text, View, Button } from 'react-native';

import { connect } from 'react-redux';
import { addCartAction } from './../../redux/cart/cart.action';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../../components/UI/customHeaderButton.component';

import ProductItemComponent from '../../components/productItem.component';
import Color from './../../constants/colors.constant';

const ProductsOverviewScreen = ({ navigation, products, addToCart, cartItems }) => {
	const count = cartItems.reduce((accumulator, item) => {
		return accumulator + item.quantity;
	}, 0);

	useEffect(
		() => {
			navigation.setParams({ count });
		},
		[ count, addToCart, cartItems ]
	);
	return (
		<FlatList
			style={styles.productsList}
			keyExtractor={(item, index) => item.id}
			data={products}
			renderItem={(product) => (
				<ProductItemComponent item={product.item}>
					<View style={styles.btnGroup}>
						<View style={styles.btn}>
							<Button
								title="view details"
								color={Color.accent}
								onPress={() =>
									navigation.navigate({
										routeName: 'ProductDetails',
										params: { productId: product.item.id, productTitle: product.item.title }
									})}
							/>
						</View>
						<View style={styles.btn}>
							<Button title="to cart" color={Color.accent} onPress={() => addToCart(product.item.id)} />
						</View>
					</View>
				</ProductItemComponent>
			)}
		/>
	);
};

ProductsOverviewScreen.navigationOptions = (navigationData) => {
	const count = navigationData.navigation.getParam('count');
	return {
		headerTitle: 'Products Overview',
		headerRight: () => (
			<View style={styles.headerBtnGroup}>
				{count > 0 ? <Text style={styles.count}>{count}</Text> : null}
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item
						title="cart"
						iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
						onPress={() => navigationData.navigation.navigate({ routeName: 'Cart' })}
					/>
				</HeaderButtons>
			</View>
		),

		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="menu"
					iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
					onPress={() => navigationData.navigation.toggleDrawer()}
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	productsList: {
		paddingHorizontal: 10
	},
	headerBtnGroup: {
		flexDirection: 'row'
	},
	count: {
		color: '#ffffff',
		backgroundColor: Color.accent,
		padding: 5,
		borderRadius: 10,
		textAlign: 'center',
		marginRight: -7
	},
	btnGroup: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginVertical: 20,
		paddingHorizontal: 10
	},
	btn: {
		width: '45%'
	}
});

const mapStateToProps = (state) => ({
	products: state.product.avaliableProducts,
	cartItems: state.cart.items
});

const mapDispatchToProps = (dispatch) => ({
	addToCart: (id) => dispatch(addCartAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsOverviewScreen);
