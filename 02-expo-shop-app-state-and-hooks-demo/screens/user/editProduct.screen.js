import React, { useState, useCallback, useEffect, useReducer } from 'react';
import { StyleSheet, ScrollView, Platform, Alert } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../../components/UI/customHeaderButton.component';
import { connect } from 'react-redux';
import { addProduct, updateProduct } from './../../redux/products/products.action';
import FormInput from '../../components/formInput.component';

const FORM_START = 'START';
const FORM_UPDATE = 'UPDATE';

const formStartAction = (selectedProduct) => {
	return {
		type: FORM_START,
		payload: selectedProduct
	};
};

const formInputAction = (value, isValid, input) => {
	return {
		type: FORM_UPDATE,
		value: value,
		isValid: isValid,
		input: input
	};
};

const INITIAL_STATE = {
	inputValues: {
		title: '',
		imageUrl: '',
		description: '',
		price: ''
	},
	inputValidation: {
		title: false,
		imageUrl: false,
		description: false,
		price: false
	},
	formIsValid: false
};

export const formReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FORM_START:
			const startInputValues = {
				...state.inputValue,
				title: action.payload ? action.payload.title : '',
				imageUrl: action.payload ? action.payload.imageUrl : '',
				description: action.payload ? action.payload.description : '',
				price: ''
			};
			const startValidation = {
				...state.inputValidation,
				title: action.payload ? true : false,
				imageUrl: action.payload ? true : false,
				description: action.payload ? true : false,
				price: action.payload ? true : false
			};
			let formIsValidStart = true;
			for (const key in startValidation) {
				formIsValidStart = formIsValidStart && startValidation[key];
			}
			return {
				...state,
				inputValues: startInputValues,
				inputValidation: startValidation,
				formIsValid: formIsValidStart
			};

		case FORM_UPDATE:
			const updatedInputValues = {
				...state.inputValues,
				[action.input]: action.value
			};
			const updatedValidation = {
				...state.inputValidation,
				[action.input]: action.isValid
			};
			let formIsValid = true;
			for (const key in updatedValidation) {
				formIsValid = formIsValid && updatedValidation[key];
			}
			return {
				...state,
				inputValues: updatedInputValues,
				inputValidation: updatedValidation,
				formIsValid: formIsValid
			};

		default:
			return state;
	}
};

const EditProductScreen = ({
	navigation,
	products,
	addProduct,
	updateProduct,
	formUpdateAction,
	formStartAction,
	formState
}) => {
	const productId = navigation.getParam('productId');
	const selectedProduct = products.find((prod) => prod.id === productId);
	const { title, imageUrl, description, price } = formState.inputValues;

	useEffect(() => {
		formStartAction(selectedProduct);
	}, []);

	useEffect(
		() => {
			if (formState.formIsValid) {
				navigation.setParams({ submit: () => handleOnSubmit(title, imageUrl, description, price) });
			}
		},
		[ handleOnSubmit, formState ]
	);

	const handleOnSubmit = useCallback(
		(title, imageUrl, description, price) => {
			if (!formState.formIsValid) {
				Alert.alert('Wrong input!', 'Please check your input.', [ { text: 'OK', style: 'default' } ]);
				return;
			}

			if (selectedProduct) {
				updateProduct(productId, title, imageUrl, description);
			} else {
				addProduct(title, imageUrl, description, price);
			}
			navigation.goBack();
		},
		[ formStartAction, formState ]
	);

	const textChangeHandler = (text, inputIdentifier) => {
		let isValid = false;
		if (text.trim().length > 0) {
			isValid = true;
		}
		formUpdateAction(text, isValid, inputIdentifier);
	};

	return (
		<ScrollView style={styles.form}>
			<FormInput
				value={title}
				isValid={formState.inputValidation.title}
				label="Title"
				handleChangeText={(text) => textChangeHandler(text, 'title')}
			/>
			<FormInput
				value={imageUrl}
				isValid={formState.inputValidation.imageUrl}
				label="ImageUrl"
				handleChangeText={(text) => textChangeHandler(text, 'imageUrl')}
			/>
			{selectedProduct ? null : (
				<FormInput
					value={price}
					isValid={formState.inputValidation.price}
					label="Price"
					handleChangeText={(text) => textChangeHandler(text, 'price')}
				/>
			)}
			<FormInput
				value={description}
				isValid={formState.inputValidation.description}
				label="Description"
				handleChangeText={(text) => textChangeHandler(text, 'description')}
			/>
		</ScrollView>
	);
};

EditProductScreen.navigationOptions = ({ navigation }) => {
	const submitHandler = navigation.getParam('submit');

	return {
		headerTitle: navigation.getParam('productId') ? 'Edit Product' : 'Add Product',
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="save"
					iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
					onPress={submitHandler}
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	form: {
		margin: 10
	}
});

const mapStateToProps = (state) => ({
	products: state.product.userProducts,
	formState: state.form
});

const mapDispatchToProps = (dispatch) => ({
	addProduct: (title, imageUrl, description, price) => dispatch(addProduct(title, imageUrl, description, price)),
	updateProduct: (id, title, imageUrl, description) => dispatch(updateProduct(id, title, imageUrl, description)),

	formStartAction: (value, isValid, input) => dispatch(formStartAction(value, isValid, input)),

	formUpdateAction: (value, isValid, input) => dispatch(formInputAction(value, isValid, input))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProductScreen);
