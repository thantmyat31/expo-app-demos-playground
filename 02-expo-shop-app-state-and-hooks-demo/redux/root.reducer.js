import { combineReducers } from 'redux';
import productsReducer from './products/products.reducer';
import cartReducer from './cart/cart.reducer';
import orderReducer from './order/order.reducer';
import { formReducer } from './../screens/user/editProduct.screen';

const rootReducer = combineReducers({
	product: productsReducer,
	cart: cartReducer,
	order: orderReducer,
	form: formReducer
});

export default rootReducer;
