import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { NEWS_CATEGORIES } from './../../data/newsCategory.data';

import CardComponent from './../../components/card.component';
import { PrimaryThemeComponent } from './../../components/theme.component';

const NewsCategoriesScreen = (props) => {
	const { navigation } = props;
	return (
		<ScrollView>
			<PrimaryThemeComponent>
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
			</PrimaryThemeComponent>
		</ScrollView>
	);
};

NewsCategoriesScreen.navigationOptions = {
	headerTitle: 'News Categories'
};

const styles = StyleSheet.create({
	screen: {
		// backgroundColor: '#7acbcd'
	},
	cardContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
		marginVertical: 20
	},
	btnStyles: {
		height: 80,
		width: '45%',
		backgroundColor: '#ffffff'
	},
	btnNameStyle: {
		color: '#1e6b6d',
		fontWeight: 'bold'
	}
});

export default NewsCategoriesScreen;
