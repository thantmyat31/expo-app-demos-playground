import { ADD_CART, REMOVE_CART } from './cart.type';
import { ADD_ORDER } from './../order/order.type';
import { addToCartUtils, removeFromCartUtils, totalAmount } from './cart.utils';
import productActionTypes from './../products/products.type';

import PRODUCTS from './../../data/products.data';
import Product from './../../models/product.model';

const INITIAL_STATE = {
	avaliableProducts: PRODUCTS,
	items: [],
	totalAmount: 0
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case productActionTypes.PRODUCT_ADD:
			const newProduct = new Product(
				new Date().toString(),
				'u1',
				action.payload.title,
				action.payload.imageUrl,
				action.payload.description,
				Number(action.payload.price)
			);
			return {
				...state,
				avaliableProducts: [ ...state.avaliableProducts, newProduct ]
			};

		case ADD_CART:
			const cartItems = addToCartUtils(action.payload, state.items, state.avaliableProducts);
			return {
				...state,
				items: cartItems,
				totalAmount: totalAmount(cartItems)
			};

		case REMOVE_CART:
			const existingCartItems = removeFromCartUtils(action.payload, state.items);
			return {
				...state,
				items: existingCartItems,
				totalAmount: totalAmount(existingCartItems)
			};

		case ADD_ORDER:
			return INITIAL_STATE;

		case productActionTypes.PRODUCT_DELETE:
			const product = state.items.find((item) => item.id === action.payload);
			if (!product) {
				return state;
			}
			const newItems = state.items.filter((item) => item.id !== product.id);
			return {
				...state,
				items: newItems,
				totalAmount: state.totalAmount - product.sum
			};

		default:
			return state;
	}
};

export default cartReducer;
