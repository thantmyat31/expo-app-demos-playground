import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';

import Color from './../../constants/colors.constant';

import { CustomFontsBold } from './../../components/customFonts.component';
import CartItem from './../../components/cartItem.component';
import { addOrderAction } from './../../redux/order/order.action';

const CartScreen = ({ navigation, cartItems, totalAmount, makeOrder }) => {
	return (
		<View style={styles.screen}>
			<View style={styles.summary}>
				<CustomFontsBold>
					Total: <Text style={styles.summaryText}>${totalAmount.toFixed(2)}</Text>
				</CustomFontsBold>
				<Button
					disabled={cartItems.length === 0}
					title="Order Now"
					color={Color.accent}
					onPress={() => {
						makeOrder(cartItems, totalAmount);
					}}
				/>
			</View>
			<View style={styles.cartItems}>
				<FlatList
					keyExtractor={(item, index) => item.id}
					data={cartItems}
					renderItem={(item) => <CartItem data={item.item} deletable={true} />}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'flex-start',
		padding: 10
	},
	summary: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		borderRadius: 10,
		elevation: 3,
		padding: 10
	},
	summaryText: {
		color: Color.primary
	},
	cartItems: {
		marginVertical: 10
	}
});

const mapStateToProps = (state) => ({
	cartItems: state.cart.items,
	totalAmount: state.cart.totalAmount
});

const mapDispatchToProps = (dispatch) => ({
	makeOrder: (items, amount) => dispatch(addOrderAction(items, amount))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
