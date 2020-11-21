export const addToCartUtils = (itemId, cartExistingItems, allProducts) => {
	const item = allProducts.find((prod) => prod.id === itemId);
	console.log(allProducts, item, itemId);
	const existingItem = cartExistingItems.find((prod) => prod.id === item.id);

	if (existingItem) {
		return cartExistingItems.map(
			(item) =>
				item.id === existingItem.id
					? { ...item, sum: item.sum + item.price, quantity: item.quantity + 1 }
					: item
		);
	} else {
		return [ ...cartExistingItems, { ...item, sum: item.price, quantity: 1 } ];
	}
};

export const removeFromCartUtils = (itemId, cartExistingItems) => {
	const removeItem = cartExistingItems.find((item) => item.id === itemId);
	if (removeItem.quantity > 1) {
		return cartExistingItems.map(
			(item) => (item.id === removeItem.id ? { ...removeItem, quantity: removeItem.quantity - 1 } : item)
		);
	} else {
		return cartExistingItems.filter((item) => item.id !== removeItem.id);
	}
};

export const totalAmount = (items) => {
	const total = items.reduce((accumulator, item) => {
		return accumulator + item.sum;
	}, 0);
	return total;
};
