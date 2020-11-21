import Order from './../../models/order.model';

import { ADD_ORDER } from './order.type';
import { orderDate } from './order.utils';

const INITIAL_STATE = {
	orders: []
};

const orderReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_ORDER:
			const newOrder = new Order(new Date().toString(), action.payload.items, action.payload.amount, orderDate());
			return {
				...state,
				orders: [ newOrder, ...state.orders ]
			};

		default:
			return state;
	}
};

export default orderReducer;
