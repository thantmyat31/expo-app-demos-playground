import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TopScreen from './../screens/top.screen';
import AboutScreen from './../screens/about.screen';
import GuideScreen from './../screens/guide.screen';
import ActiviesScreen from './../screens/activities.screen';
import MessageScreen from './../screens/message.screen';
import OthersScreen from './../screens/others.screen';

import LoginScreen from './../screens/auth/login.screen';
import RegisterScreen from './../screens/auth/register.screen';

import NewsScreen from './../screens/news/news.screen';
import NewsCategoriesScreen from './../screens/news/newsCategories.screen';
import NewsDetailsScreen from './../screens/news/newsDetails.screen';

import Color from './../constants/colors.constant';

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
		Register: RegisterScreen,
		...NewsNavigator
	},
	defaultStackNavitionOptions
);

export default createAppContainer(MainNavigator);
