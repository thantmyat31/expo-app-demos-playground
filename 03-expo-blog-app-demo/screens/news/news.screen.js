import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import { PrimaryThemeComponent } from './../../components/theme.component';

import { NEWS_CATEGORIES } from './../../data/newsCategory.data';
import { NEWS_DATA } from './../../data/news.data';

const NewsList = ({ item, navigation }) => {
	const title = item.title && item.title.length > 27 ? item.title.substring(0, 27) + ' ...' : item.title;
	const content = item.content && item.content.length > 90 ? item.content.substring(0, 90) + ' ...' : item.content;
	return (
		<TouchableOpacity
			activeOpacity={0.6}
			onPress={() =>
				navigation.navigate({ routeName: 'NewsDetails', params: { newsId: item.id, newsTitle: title } })}
		>
			<View style={styles.newsListItem}>
				<Image source={{ uri: item.imageUrl }} style={styles.image} />
				<View style={styles.content}>
					<Text style={styles.title}>{title}</Text>
					<Text>{content}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const NewsScreen = ({ navigation }) => {
	const newsId = navigation.getParam('newsId');
	const selectedNewsCategory = NEWS_CATEGORIES.find((news) => news.id === newsId);
	const selectedNews = NEWS_DATA.filter((news) => news.categoryId === selectedNewsCategory.id);
	return (
		<PrimaryThemeComponent>
			<FlatList
				style={styles.newsList}
				keyExtractor={(item, index) => item.id}
				data={selectedNews}
				renderItem={({ item }) => <NewsList item={item} navigation={navigation} />}
			/>
		</PrimaryThemeComponent>
	);
};

NewsScreen.navigationOptions = (navigationData) => {
	const newsId = navigationData.navigation.getParam('newsId');
	const selectedNews = NEWS_CATEGORIES.find((news) => news.id === newsId);
	return {
		headerTitle: `${selectedNews.title} News`
	};
};

const styles = StyleSheet.create({
	newsList: {
		width: '100%'
	},
	newsListItem: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginHorizontal: 10,
		marginVertical: 5,
		backgroundColor: '#ffffff',
		padding: 10
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35
	},
	content: {
		width: '75%'
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});

export default NewsScreen;
