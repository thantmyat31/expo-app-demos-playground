import React from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import { NEWS_CATEGORIES } from './../../data/newsCategory.data';

import CardComponent from './../../components/card.component';
import { DarkThemeComponent } from './../../components/theme.component';

import Color from './../../constants/colors.constant';

const NewsCategoriesScreen = (props) => {
	const { navigation } = props;
	return (
		<ScrollView>
			<DarkThemeComponent>
				<View style={styles.cardContainer}>
					{NEWS_CATEGORIES.map((news) => (
						<CardComponent
							key={news.id}
							name={news.title}
							btnStyles={styles.btnStyles}
							btnNameStyle={styles.btnNameStyle}
							onPress={() => navigation.navigate({ routeName: 'News', params: { newsId: news.id } })}
						>
							{news.imageUrl && (
								<Image source={{ uri: news.imageUrl }} style={{ width: '100%', height: '100%' }} />
							)}
						</CardComponent>
					))}
				</View>
			</DarkThemeComponent>
		</ScrollView>
	);
};

NewsCategoriesScreen.navigationOptions = {
	headerTitle: 'News Categories'
};

const styles = StyleSheet.create({
	cardContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginVertical: 20
	},
	btnStyles: {
		height: 80,
		width: '45%',
		backgroundColor: '#ffffff',
		borderRadius: 0,
		padding: 0
	},
	btnNameStyle: {
		color: '#ffffff',
		backgroundColor: 'rgba(0,0,0,0.6)',
		fontWeight: 'bold',
		paddingHorizontal: 10,
		position: 'absolute',
		bottom: 0,
		right: 0
	}
});

export default NewsCategoriesScreen;
