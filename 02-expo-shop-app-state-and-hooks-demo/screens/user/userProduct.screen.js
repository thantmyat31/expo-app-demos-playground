import React from 'react';
import { View, Text, FlatList, StyleSheet, Platform, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import ProductItemComponent from '../../components/productItem.component';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../../components/UI/customHeaderButton.component';
import Color from './../../constants/colors.constant';
import { deleteProduct } from './../../redux/products/products.action';

const UserProductScreen = ({ navigation, products, deleteProduct }) => {
	const handleOnDelete = (prodId) => {
		Alert.alert('Are you sure ?', 'Do you really want to delete this item ?', [
			{ text: 'NO', style: 'cancel' },
			{ text: 'Yes', style: 'destructive', onPress: () => deleteProduct(prodId) }
		]);
	};
	return (
		<View style={styles.productsList}>
			{products.length ? (
				<FlatList
					keyExtractor={(item, index) => item.id}
					data={products}
					renderItem={(prod) => (
						<ProductItemComponent item={prod.item}>
							<View style={styles.btnGroup}>
								<View style={styles.btn}>
									<Button
										title="edit"
										color={Color.accent}
										onPress={() =>
											navigation.navigate({
												routeName: 'EditProduct',
												params: { productId: prod.item.id }
											})}
									/>
								</View>
								<View style={styles.btn}>
									<Button
										title="delete"
										color={Color.accent}
										onPress={() => handleOnDelete(prod.item.id)}
									/>
								</View>
							</View>
						</ProductItemComponent>
					)}
				/>
			) : (
				<View style={styles.empty}>
					<Text style={styles.emptyText}>You have no product. Start to add some product.</Text>
				</View>
			)}
		</View>
	);
};

UserProductScreen.navigationOptions = ({ navigation }) => {
	return {
		headerTitle: 'Your Products',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="menu"
					iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
					onPress={() => navigation.toggleDrawer()}
				/>
			</HeaderButtons>
		),
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="menu"
					iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
					onPress={() => navigation.navigate({ routeName: 'EditProduct' })}
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	productsList: {
		paddingHorizontal: 10
	},
	btnGroup: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		marginVertical: 20,
		paddingHorizontal: 10
	},
	btn: {
		width: '45%'
	},
	empty: {
		marginHorizontal: 20,
		marginVertical: 30
	},
	emptyText: {
		textAlign: 'center'
	}
});

const mapStateToProps = (state) => ({
	products: state.product.userProducts
});

const mapStateToDispatch = (dispatch) => ({
	deleteProduct: (productId) => dispatch(deleteProduct(productId))
});

export default connect(mapStateToProps, mapStateToDispatch)(UserProductScreen);
