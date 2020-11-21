import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton.component';
import { DefaultText, DefaultTextBold } from './../components/DefaultText.component';

import { connect } from 'react-redux';
import { toggleFavorite } from './../redux/actions/meal.action';

const ListItem = ({ children }) => {
	return (
		<View style={styles.listItem}>
			<Text>{children}</Text>
		</View>
	);
};

const MealDetailsScreen = (props) => {
	const { navigation, meals, toggleFavorite, mealsFavorite } = props;
	const mealId = navigation.getParam('mealId');
	const meal = meals.find((meal) => meal.id === mealId);
	const isFavorite = mealsFavorite.find((m) => m.id === meal.id);

	useEffect(
		() => {
			props.navigation.setParams({ toggleFavorite, isFavorite });
		},
		[ toggleFavorite, mealsFavorite ]
	);

	return (
		<ScrollView>
			<Image style={styles.image} source={{ uri: meal.imageUrl }} />
			<View style={{ ...styles.details }}>
				<DefaultText>{meal.duration}m</DefaultText>
				<DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
				<DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
			</View>
			<DefaultTextBold style={styles.title}>Ingredients</DefaultTextBold>
			{meal.ingredients.map((ingredient) => <ListItem key={ingredient}>{ingredient}</ListItem>)}
			<DefaultTextBold style={styles.title}>Steps</DefaultTextBold>
			{meal.steps.map((step) => <ListItem key={step}>{step}</ListItem>)}
		</ScrollView>
	);
};

MealDetailsScreen.navigationOptions = (navigationData) => {
	const mealId = navigationData.navigation.getParam('mealId');
	const mealTitleFromNavData = navigationData.navigation.getParam('mealTitle');
	const isFavorite = navigationData.navigation.getParam('isFavorite');

	const mealTitle =
		mealTitleFromNavData.length > 22 ? mealTitleFromNavData.substring(0, 22) + '...' : mealTitleFromNavData;
	const toggleFavorite = navigationData.navigation.getParam('toggleFavorite');
	return {
		headerTitle: mealTitle,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="Favorite"
					iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
					onPress={() => toggleFavorite(mealId)}
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200
	},
	title: {
		textAlign: 'center',
		fontSize: 22,
		paddingVertical: 10
	},
	mealRow: {
		flexDirection: 'row'
	},
	details: {
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		paddingHorizontal: 10,
		paddingVertical: 5,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	listItem: {
		padding: 10,
		marginHorizontal: 20,
		marginVertical: 10,
		borderWidth: 1,
		borderColor: '#dddddd'
	}
});

const mapStateToProps = (state) => ({
	meals: state.meal.meals,
	mealsFavorite: state.meal.mealsFavorite
});

const mapDispatchToProps = (dispatch) => ({
	toggleFavorite: (id) => dispatch(toggleFavorite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MealDetailsScreen);
