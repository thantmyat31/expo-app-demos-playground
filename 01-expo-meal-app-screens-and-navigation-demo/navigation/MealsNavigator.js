import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from './../screens/CategoriesScreen';
import CategoryMealScreen from './../screens/CategoryMealScreen';
import MealDetailsScreen from './../screens/MealDetailsScreen';
import FavoritesScreen from './../screens/FavoritesScreen';

import Color from '../constants/colors.constant';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import FilterScreen from './../screens/FilterScreen';
import { createDrawerNavigator } from 'react-navigation-drawer';

const defaultStackNavigationOptions = {
	mode: 'card',
	defaultNavigationOptions: {
		headerTitle: 'Screen',
		headerStyle: { backgroundColor: Color.primary },
		headerTitleStyle: {
			fontFamily: 'open-sans-bold'
		},
		headerBackTitleStyle: {
			fontFamily: 'open-sans'
		},
		headerTintColor: '#ffffff'
	}
};

const MealsNavigator = createStackNavigator(
	{
		Categories: CategoriesScreen,
		CategoryMeal: CategoryMealScreen,
		MealDetails: MealDetailsScreen
	},
	defaultStackNavigationOptions
);

const FavoritesNavigator = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		MealDetails: MealDetailsScreen
	},
	defaultStackNavigationOptions
);

const FilterNavigator = createStackNavigator(
	{
		Filter: FilterScreen
	},
	defaultStackNavigationOptions
);

const tabScreenConfig = {
	Meals: {
		screen: MealsNavigator,
		navigationOptions: {
			tabBarLabel: 'Meals',
			tabBarIcon: (tabInfo) => {
				return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />;
			},
			tabBarColor: Color.primary
		}
	},
	Favorites: {
		screen: FavoritesNavigator,
		navigationOptions: {
			tabBarLabel: 'Favorites!',
			tabBarIcon: (tabInfo) => {
				return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
			},
			tabBarColor: Color.secondary
		}
	}
};

const MealsFavTabNavigator =
	Platform.OS === 'android'
		? createMaterialBottomTabNavigator(tabScreenConfig, {
				activeColor: '#ffffff',
				shifting: true,
				barStyle: {
					backgroundColor: Color.primary
				}
			})
		: createBottomTabNavigator(tabScreenConfig, {
				tabBarOptions: {
					activeTintColor: Color.secondary,
					fontFamily: 'open-sans'
				}
			});

const MainNavigator = createDrawerNavigator(
	{
		MealsFav: {
			screen: MealsFavTabNavigator,
			navigationOptions: {
				drawerLabel: 'Meals'
			}
		},
		Filter: {
			screen: FilterNavigator,
			navigationOptions: {
				drawerLabel: 'Filters'
			}
		}
	},
	{
		contentOptions: {
			activeBackgroundColor: '#f5f5f5',
			activeTintColor: Color.secondary,
			labelStyle: {
				fontFamily: 'open-sans-bold'
			}
		}
	}
);

export default createAppContainer(MainNavigator);
