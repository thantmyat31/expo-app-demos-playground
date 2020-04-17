import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TopScreen from './../screens/top.screen';
import AboutScreen from './../screens/about.screen';
import GuideScreen from './../screens/guide.screen';
import OthersScreen from './../screens/others.screen';

import LoginScreen from './../screens/auth/login.screen';
import RegisterScreen from './../screens/auth/register.screen';

import NewsScreen from './../screens/news/news.screen';
import NewsCategoriesScreen from './../screens/news/newsCategories.screen';
import NewsDetailsScreen from './../screens/news/newsDetails.screen';

import ActivitiesScreen from './../screens/activities/activities.screen';
import ActivityDetails from './../screens/activities/activityDetails.screen';

import MessageScreen from './../screens/messages/message.screen';
import YourMessagesScreen from './../screens/messages/yourMessages.screen';
import SendMessageScreen from './../screens/messages/sendMessage.screen';
import MessageDetailsScreen from './../screens/messages/messageDetails.screen';

import UserProfileScreen from './../screens/user/user.profile.screen';

import Color from './../constants/colors.constant';
import UserFavoritePostScreen from './../screens/user/user.favorite.posts.screen';
import { Ionicons } from '@expo/vector-icons';

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

const ActivitiesNavigator = {
	Activities: ActivitiesScreen,
	Activity: ActivityDetails
};

const MessagesNavigator = {
	Message: MessageScreen,
	YourMessages: YourMessagesScreen,
	SendMessage: SendMessageScreen,
	MessageDetails: MessageDetailsScreen
};

const ProfileTabsNavigator = createBottomTabNavigator(
	{
		Profile: {
			screen: UserProfileScreen,
			navigationOptions: {
				tabBarLabel: 'Profile',
				tabBarIcon: (tabInfo) => {
					return <Ionicons name="md-person" size={25} color={tabInfo.tintColor} />;
				}
			}
		},
		FavoritePosts: {
			screen: UserFavoritePostScreen,
			navigationOptions: {
				tabBarLabel: 'Favorite',
				tabBarIcon: (tabInfo) => {
					return <Ionicons name="md-heart" size={25} color={tabInfo.tintColor} />;
				}
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: '#ffffff',
			activeBackgroundColor: Color.primaryTheme.headerBackground
		}
	}
);

const MainNavigator = createStackNavigator(
	{
		Top: TopScreen,
		About: AboutScreen,
		Guide: GuideScreen,

		Login: LoginScreen,
		Register: RegisterScreen,

		Others: OthersScreen,
		...ActivitiesNavigator,
		...NewsNavigator,
		...MessagesNavigator,
		Profile: ProfileTabsNavigator
	},
	defaultStackNavitionOptions
);

export default createAppContainer(MainNavigator);
