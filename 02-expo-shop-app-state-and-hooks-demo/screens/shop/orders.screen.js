import React from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../../components/UI/customHeaderButton.component';
import OrderItem from '../../components/orderItem.component';

const OrdersScreen = ({ orders }) => {
	return (
		<FlatList
			keyExtractor={(item, index) => item.id}
			data={orders}
			renderItem={(order) => <OrderItem order={order.item} />}
		/>
	);
};

OrdersScreen.navigationOptions = ({ navigation }) => {
	return {
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="menu"
					iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
					onPress={() => navigation.toggleDrawer()}
				/>
			</HeaderButtons>
		)
	};
};

const mapStateToProps = (state) => ({
	orders: state.order.orders
});

export default connect(mapStateToProps)(OrdersScreen);
