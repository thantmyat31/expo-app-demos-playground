import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import MealItem from './MealItem.component';
import { connect } from 'react-redux';

const MealList = ({ data, nav, mealsFavorite }) => {
	const renderMealsList = (itemData) => {
		const isFavorite = mealsFavorite.find((meal) => meal.id === itemData.item.id);
		return (
			<MealItem
				data={itemData}
				onPress={() =>
					nav.navigate({
						routeName: 'MealDetails',
						params: { mealId: itemData.item.id, mealTitle: itemData.item.title, isFavorite }
					})}
			/>
		);
	};
	return (
		<View style={styles.screen}>
			<FlatList
				style={styles.mealsList}
				keyExtractor={(item, index) => item.id}
				data={data}
				renderItem={renderMealsList}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	mealsList: {
		width: '100%',
		margin: 10,
		paddingHorizontal: 10
	}
});

const mapStateToProps = (state) => ({
	mealsFavorite: state.meal.mealsFavorite
});

export default connect(mapStateToProps)(MealList);
