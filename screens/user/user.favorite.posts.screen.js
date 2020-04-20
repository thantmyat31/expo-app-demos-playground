import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import MessagesListItem from '../../components/messagesListItem.component';

const UserFavoritePostScreen = ({ favoritePosts, navigation }) => {
	const handleOnNavigate = (newsId, title) => {
		navigation.navigate({ routeName: 'NewsDetails', params: { newsId: newsId, newsTitle: title } });
	};

	return (
		<View style={styles.screen}>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={favoritePosts}
				renderItem={(news) => (
					<MessagesListItem
						favoritePost={true}
						data={news.item}
						onPress={() => handleOnNavigate(news.item.id, news.item.title)}
					/>
				)}
			/>
		</View>
	);
};

UserFavoritePostScreen.navigationOptions = {
	headerTitle: 'Favorite Posts'
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});

const mapStateToProps = (state) => ({
	favoritePosts: state.user.currentUser.favoritePosts
});

export default connect(mapStateToProps)(UserFavoritePostScreen);
