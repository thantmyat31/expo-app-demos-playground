import productActionTypes from './products.type';

export const deleteProduct = (productId) => ({
	type: productActionTypes.PRODUCT_DELETE,
	payload: productId
});

export const addProduct = (title, imageUrl, description, price) => ({
	type: productActionTypes.PRODUCT_ADD,
	payload: {
		title,
		imageUrl,
		description,
		price
	}
});

export const updateProduct = (id, title, imageUrl, description) => ({
	type: productActionTypes.PRODUCT_UPDATE,
	pid: id,
	payload: {
		title,
		imageUrl,
		description
	}
});
