import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { PrimaryThemeComponent } from './../../components/theme.component';

import { Ionicons } from '@expo/vector-icons';

import { NEWS_DATA } from './../../data/news.data';
import { connect } from 'react-redux';
import { addFavoritePostAction } from '../../redux/user/user.action';

const NewsDetailsScreen = ({ navigation, currentUser, addToFavoritePost }) => {
	const newsId = navigation.getParam('newsId');
	const selectedNews = NEWS_DATA.find((news) => news.id === newsId);

	const [ isFavoritePost, setIsFavoritePost ] = useState(false);

	useEffect(() => {
		if (currentUser) {
			if (currentUser.favoritePosts && currentUser.favoritePosts.indexOf(selectedNews) !== -1) {
				setIsFavoritePost(true);
			}
		}
	}, []);

	const handleOnAddFavoritePost = (post) => {
		addToFavoritePost(post);
		setIsFavoritePost(!isFavoritePost);
	};

	return (
		<PrimaryThemeComponent screenStyle={styles.screenStyle}>
			<ScrollView>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={{ uri: selectedNews.imageUrl }} />
				</View>

				<View style={styles.newsDetailsContainer}>
					<Text style={styles.title}>{selectedNews.title}</Text>
					<View style={styles.details}>
						<View style={styles.dateContainer}>
							<Ionicons name="ios-calendar" size={25} />
							<Text style={styles.date}> {selectedNews.date}</Text>
						</View>
						{currentUser && (
							<TouchableOpacity
								style={styles.favorites}
								activeOpacity={0.6}
								onPress={() => handleOnAddFavoritePost(selectedNews)}
							>
								<Ionicons name="md-heart" size={25} color={isFavoritePost ? '#f00' : '#ccc'} />
							</TouchableOpacity>
						)}
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
	details: {
		marginBottom: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	dateContainer: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	date: {
		fontSize: 12,
		letterSpacing: 1
	},
	favorites: { paddingVertical: 10, paddingHorizontal: 20 },
	content: {
		lineHeight: 25,
		letterSpacing: 1
	}
});

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	addToFavoritePost: (post) => dispatch(addFavoritePostAction(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetailsScreen);
