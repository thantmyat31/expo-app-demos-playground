import React from 'react';

import Color from '../constants/colors.constant';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MealList from '../components/MealList.component';
import CustomHeaderButton from './../components/HeaderButton.component';

import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

const FavoritesScreen = (props) => {
	const { meals } = props;
	if (meals.length === 0 || !meals) {
		return (
			<View style={styles.content}>
				<Text>No favorite meals found. Start adding some!</Text>
			</View>
		);
	}
	return <MealList data={meals} nav={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navigationData) => {
	return {
		headerTitle: 'Your Favorite Meals',
		headerStyle: {
			backgroundColor: Color.secondary
		},
		headerTintColor: '#ffffff',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item title="Menu" iconName="ios-menu" onPress={() => navigationData.navigation.toggleDrawer()} />
			</HeaderButtons>
		)
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
	meals: state.meal.mealsFavorite
});

export default connect(mapStateToProps)(FavoritesScreen);
