import React from 'react';
import { View, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { CustomFontsBold } from './customFonts.component';
import { connect } from 'react-redux';
import { removeCartAction } from '../redux/cart/cart.action';

const CartItem = ({ data, removeItem, deletable }) => {
	return (
		<View style={styles.itemContainer}>
			<View style={styles.itemContents}>
				<CustomFontsBold style={styles.quantity}>{data.quantity} </CustomFontsBold>
				<CustomFontsBold>{data.title}</CustomFontsBold>
			</View>
			<View style={styles.itemContents}>
				<CustomFontsBold style={styles.sum}>$ {data.sum.toFixed(2)} </CustomFontsBold>
				{deletable && (
					<TouchableOpacity
						style={styles.delete}
						onPress={() => {
							removeItem(data.id);
						}}
					>
						<Ionicons
							name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
							size={23}
							color="#ff0000"
						/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	itemContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 5,
		paddingHorizontal: 20
	},
	itemContents: {
		flexDirection: 'row'
	},
	quantity: {
		color: '#888'
	},
	delete: {
		marginLeft: 20
	}
});

const mapDispatchToProps = (dispatch) => ({
	removeItem: (id) => dispatch(removeCartAction(id))
});

export default connect(null, mapDispatchToProps)(CartItem);
