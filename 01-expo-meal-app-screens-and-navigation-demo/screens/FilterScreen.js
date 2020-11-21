import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Switch } from 'react-native';

import Color from '../constants/colors.constant';

import CustomHeaderButton from './../components/HeaderButton.component';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DefaultTextBold } from '../components/DefaultText.component';
import { DefaultText } from './../components/DefaultText.component';
import { setFilters } from '../redux/actions/meal.action';
import { connect } from 'react-redux';

const FilterSwitch = ({ title, value, setNextValue }) => {
	return (
		<View style={styles.filterContainer}>
			<DefaultText>{title}</DefaultText>
			<Switch trackColor={{ true: Color.primary }} value={value} onValueChange={setNextValue} />
		</View>
	);
};

const FilterScreen = ({ navigation, setFilters }) => {
	const [ isGlutenFree, setIsGlutenFree ] = useState(false);
	const [ isVegan, setIsVegan ] = useState(false);
	const [ isVegetarian, setIsVegetarian ] = useState(false);
	const [ isLactoseFree, setIsLactoseFree ] = useState(false);

	const saveFilters = useCallback(
		() => {
			const appliedFilter = {
				glutenFree: isGlutenFree,
				latoseFree: isLactoseFree,
				vegan: isVegan,
				vegetarian: isVegetarian
			};

			console.log(appliedFilter);
			setFilters(appliedFilter);
		},
		[ isGlutenFree, isLactoseFree, isVegan, isVegetarian, setFilters ]
	);

	useEffect(
		() => {
			navigation.setParams({ save: saveFilters });
		},
		[ saveFilters ]
	);

	return (
		<View style={styles.screen}>
			<DefaultTextBold style={styles.title}>Avaliable Filters / Restrictions</DefaultTextBold>

			<FilterSwitch
				title="Gluten Free"
				value={isGlutenFree}
				setNextValue={(nextValue) => setIsGlutenFree(nextValue)}
			/>
			<FilterSwitch
				title="Lactose Free"
				value={isLactoseFree}
				setNextValue={(nextValue) => setIsLactoseFree(nextValue)}
			/>
			<FilterSwitch title="Vegan" value={isVegan} setNextValue={(nextValue) => setIsVegan(nextValue)} />
			<FilterSwitch
				title="Vegetarian"
				value={isVegetarian}
				setNextValue={(nextValue) => setIsVegetarian(nextValue)}
			/>
		</View>
	);
};

FilterScreen.navigationOptions = (navigationData) => {
	return {
		headerTitle: 'Filter Meals',
		headerStyle: {
			backgroundColor: Color.primary
		},
		headerTintColor: '#ffffff',
		headerLeft: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item title="Menu" iconName="ios-menu" onPress={() => navigationData.navigation.toggleDrawer()} />
			</HeaderButtons>
		),
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item title="save" iconName="ios-save" onPress={navigationData.navigation.getParam('save')} />
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center'
	},
	title: {
		fontSize: 20,
		margin: 20,
		textAlign: 'center'
	},
	filterContainer: {
		width: '80%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 10
	}
});

const mapDispatchToProps = (dispatch) => ({
	setFilters: (appliedFilter) => dispatch(setFilters(appliedFilter))
});

export default connect(null, mapDispatchToProps)(FilterScreen);
