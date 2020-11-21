import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import CartItem from './cartItem.component';

import Color from './../constants/colors.constant';

const OrderItem = ({ order }) => {
	const [ showDetails, setShowDetails ] = useState(false);
	return (
		<View style={styles.wrapper}>
			<View style={styles.textContainer}>
				<Text style={styles.amount}>${order.totalAmount.toFixed(2)}</Text>
				<Text style={styles.date}>{order.date}</Text>
			</View>
			<View style={styles.btnContainer}>
				<Button
					title={!showDetails ? 'view details' : 'hide details'}
					color={Color.primary}
					onPress={() => setShowDetails(!showDetails)}
				/>
			</View>
			{showDetails ? <View>{order.items.map((item) => <CartItem key={item.id} data={item} />)}</View> : null}
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flexDirection: 'column',
		elevation: 3,
		borderRadius: 10,
		marginVertical: 7,
		marginHorizontal: 10,
		padding: 10
	},
	textContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	amount: {
		fontWeight: 'bold'
	},
	date: {
		color: '#888'
	},
	btnContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 10
	}
});

export default OrderItem;
