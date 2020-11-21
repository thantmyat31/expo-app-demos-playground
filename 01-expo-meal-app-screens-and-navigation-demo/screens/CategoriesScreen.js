import React from 'react';
import { FlatList } from 'react-native';

import { CATEGORIES } from './../data/category.data';
import Color from '../constants/colors.constant';
import CategoryGrid from '../components/CategoryGrid.component';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from './../components/HeaderButton.component';

const CategoriesScreen = ({ navigation }) => {
	const renderGridItems = (itemData) => {
		return (
			<CategoryGrid
				onPress={() =>
					navigation.navigate({ routeName: 'CategoryMeal', params: { categoryId: itemData.item.id } })}
				title={itemData.item.title}
				color={itemData.item.color}
			/>
		);
	};
	return (
		<FlatList
			keyExtractor={(item, index) => item.id}
			data={CATEGORIES}
			renderItem={renderGridItems}
			numColumns={2}
		/>
	);
};

CategoriesScreen.navigationOptions = {
	headerTitle: 'Meal Categories',
	headerStyle: {
		backgroundColor: Color.primary
	},
	headerTintColor: '#ffffff',
	headerLeft: () => (
		<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
			<Item title="Menu" iconName="ios-menu" onPress={() => navigationData.navigation.toggleDrawer()} />
		</HeaderButtons>
	)
};

export default CategoriesScreen;
