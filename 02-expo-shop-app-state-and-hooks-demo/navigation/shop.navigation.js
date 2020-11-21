import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import ProductsOverviewScreen from './../screens/shop/productsOverview.screen';
import OrdersScreen from './../screens/shop/orders.screen';
import ProductDetailsScreen from './../screens/shop/productDetails.screen';
import CartScreen from './../screens/shop/cart.screen';

import Color from './../constants/colors.constant';
import { Ionicons } from '@expo/vector-icons';
import UserProductScreen from './../screens/user/userProduct.screen';
import EditProductScreen from './../screens/user/editProduct.screen';

const defaultStackNavigationOptions = {
	headerStyle: {
		backgroundColor: Color.primary
	},
	headerTintColor: '#ffffff',
	headerTitleStyle: {
		fontFamily: 'open-sans-bold'
	}
};

const ShopNavigator = createStackNavigator(
	{
		ProductsOverview: {
			screen: ProductsOverviewScreen
		},
		ProductDetails: ProductDetailsScreen,
		Cart: CartScreen
	},
	{
		navigationOptions: {
			drawerIcon: (drawerConfig) => (
				<Ionicons
					name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
					color={drawerConfig.tintColor}
					size={23}
				/>
			)
		},
		defaultNavigationOptions: defaultStackNavigationOptions
	}
);

const OrdersNavigator = createStackNavigator(
	{
		Orders: OrdersScreen
	},
	{
		navigationOptions: {
			drawerIcon: (drawerConfig) => (
				<Ionicons
					name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
					color={drawerConfig.tintColor}
					size={23}
				/>
			)
		},
		defaultNavigationOptions: defaultStackNavigationOptions
	}
);

const AdminNavigator = createStackNavigator(
	{
		UserProduct: UserProductScreen,
		EditProduct: EditProductScreen
	},
	{
		navigationOptions: {
			drawerIcon: (drawerConfig) => (
				<Ionicons
					name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
					color={drawerConfig.tintColor}
					size={23}
				/>
			)
		},
		defaultNavigationOptions: defaultStackNavigationOptions
	}
);

const ShopOrderNavigator = createDrawerNavigator(
	{
		Shop: ShopNavigator,
		Order: OrdersNavigator,
		Admin: AdminNavigator
	},
	{
		contentOptions: {
			activeTintColor: Color.primary
		}
	}
);

export default createAppContainer(ShopOrderNavigator);
