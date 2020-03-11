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

const MainNavigator = createStackNavigator({
	Top: TopScreen,
	About: AboutScreen,
	Guide: GuideScreen,
	NewsCategories: NewsCategoriesScreen,
	Activies: ActiviesScreen,
	News: NewsScreen
});

export default createAppContainer(MainNavigator);
