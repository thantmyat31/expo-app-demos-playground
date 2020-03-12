import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import NewsCategoriesScreen from './../screens/newsCategories.screen';
import TopScreen from './../screens/top.screen';
import NewsScreen from './../screens/news.screen';
import AboutScreen from './../screens/about.screen';
import GuideScreen from './../screens/guide.screen';
import ActiviesScreen from './../screens/activities.screen';
import MessageScreen from './../screens/message.screen';
import OthersScreen from './../screens/others.screen';
import LoginScreen from './../screens/login.screen';

import Color from '../constants/colors.constant';
import NewsDetailsScreen from './../screens/newsDetails.screen';

const defaultStackNavitionOptions = {
	mode: 'card',
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Color.primaryTheme.headerBackground
		},
		headerTintColor: Color.primaryTheme.headerText
	}
};

const NewsNavigator = {
	NewsCategories: NewsCategoriesScreen,
	News: NewsScreen,
	NewsDetails: NewsDetailsScreen
};

const MainNavigator = createStackNavigator(
	{
		Top: TopScreen,
		About: AboutScreen,
		Guide: GuideScreen,
		Activities: ActiviesScreen,
		Message: MessageScreen,
		Others: OthersScreen,
		Login: LoginScreen,
		...NewsNavigator
	},
	defaultStackNavitionOptions
);

export default createAppContainer(MainNavigator);
