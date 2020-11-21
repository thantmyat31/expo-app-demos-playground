import { ADD_ORDER } from './order.type';

export const addOrderAction = (cartItems, totalAmount) => ({
	type: ADD_ORDER,
	payload: { items: cartItems, amount: totalAmount }
});
