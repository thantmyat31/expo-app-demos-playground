import React from 'react';

import { CATEGORIES } from './../data/category.data';
import MealList from '../components/MealList.component';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

const CategoryMealScreen = (props) => {
	const cid = props.navigation.getParam('categoryId');
	const category = CATEGORIES.find((category) => category.id === cid);
	const meals = props.meals.filter((meal) => meal.categoryIds.find((id) => id === category.id));
	if (meals.length === 0) {
		return (
			<View style={styles.content}>
				<Text>No meals found, maybe check your filters.</Text>
			</View>
		);
	}

	return <MealList data={meals} nav={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
	const cid = navigationData.navigation.getParam('categoryId');
	const category = CATEGORIES.find((category) => category.id === cid);
	return {
		headerTitle: category.title,
		headerStyle: {
			backgroundColor: category.color
		},
		headerTintColor: '#ffffff'
	};
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

const mapStateToProps = (state) => ({
	meals: state.meal.mealsFiltered
});

export default connect(mapStateToProps)(CategoryMealScreen);
