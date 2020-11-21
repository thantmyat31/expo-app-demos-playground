import PRODUCTS from './../../data/products.data';
import productActionTypes from './products.type';
import Product from './../../models/product.model';

const INITIAL_STATE = {
	avaliableProducts: PRODUCTS,
	userProducts: PRODUCTS.filter((prod) => prod.ownerId === 'u1')
};

const productsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case productActionTypes.PRODUCT_ADD:
			console.log('addded!!!!!');
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
				avaliableProducts: [ ...state.avaliableProducts, newProduct ],
				userProducts: [ ...state.userProducts, newProduct ]
			};

		case productActionTypes.PRODUCT_UPDATE:
			const productIndex = state.userProducts.findIndex((prod) => prod.id === action.pid);
			const updatedProduct = new Product(
				action.pid,
				state.userProducts[productIndex].ownerId,
				action.payload.title,
				action.payload.imageUrl,
				action.payload.description,
				state.userProducts[productIndex].price
			);
			const updateUserProducts = [ ...state.userProducts ];
			updateUserProducts[productIndex] = updatedProduct;

			const avaliableProductIndex = state.avaliableProducts.findIndex((prod) => prod.id === action.pid);
			const updateAvaliableProducts = [ ...state.avaliableProducts ];
			updateAvaliableProducts[avaliableProductIndex] = updatedProduct;

			return {
				...state,
				avaliableProducts: updateAvaliableProducts,
				userProducts: updateUserProducts
			};

		case productActionTypes.PRODUCT_DELETE:
			return {
				...state,
				userProducts: state.userProducts.filter((prod) => prod.id !== action.payload),
				avaliableProducts: state.avaliableProducts.filter((prod) => prod.id !== action.payload)
			};

		default:
			return state;
	}
};

export default productsReducer;
