import { ADD_CART, REMOVE_CART } from './cart.type';

export const addCartAction = (itemId) => ({
	type: ADD_CART,
	payload: itemId
});

export const removeCartAction = (itemId) => ({
	type: REMOVE_CART,
	payload: itemId
});
