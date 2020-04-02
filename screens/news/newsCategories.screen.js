import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
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
						/>
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
		backgroundColor: Color.primaryColor
	},
	btnNameStyle: {
		color: '#000000',
		fontWeight: 'bold'
	}
});

export default NewsCategoriesScreen;
