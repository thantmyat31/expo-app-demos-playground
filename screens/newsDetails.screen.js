import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { PrimaryThemeComponent } from './../components/theme.component';

import { Ionicons } from '@expo/vector-icons';

import { NEWS_DATA } from './../data/news.data';

const NewsDetailsScreen = ({ navigation }) => {
	const newsId = navigation.getParam('newsId');
	const selectedNews = NEWS_DATA.find((news) => news.id === newsId);

	return (
		<PrimaryThemeComponent screenStyle={styles.screenStyle}>
			<ScrollView>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={{ uri: selectedNews.imageUrl }} />
				</View>

				<View style={styles.newsDetailsContainer}>
					<Text style={styles.title}>{selectedNews.title}</Text>
					<View style={styles.dateContainer}>
						<Text>
							<Ionicons name="ios-calendar" size={25} />
						</Text>
						<Text style={styles.date}> {selectedNews.date}</Text>
					</View>
					<Text style={styles.content}>{selectedNews.content}</Text>
				</View>
			</ScrollView>
		</PrimaryThemeComponent>
	);
};

NewsDetailsScreen.navigationOptions = (navigationData) => {
	const title = navigationData.navigation.getParam('newsTitle');
	return {
		headerTitle: title
	};
};

const styles = StyleSheet.create({
	screenStyle: {
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	imageContainer: {
		width: '100%',
		height: 200,
		elevation: 5,
		backgroundColor: '#000'
	},
	image: {
		width: '100%',
		height: '100%'
	},
	newsDetailsContainer: {
		padding: 20
	},
	title: {
		fontSize: 27,
		letterSpacing: 1,
		marginBottom: 20
	},
	dateContainer: {
		marginBottom: 20,
		flexDirection: 'row',
		alignItems: 'center'
	},
	date: {
		fontSize: 12,
		letterSpacing: 1
	},
	content: {
		lineHeight: 25,
		letterSpacing: 1
	}
});

export default NewsDetailsScreen;
