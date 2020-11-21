import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import Screen from './../components/Screen';

import Card from './../components/Card';
import AppText from './../components/AppText';
import AppButton from './../components/AppButton';

import listingsApi from '../api/listings';
import colors from '../config/colors';
import routes from '../navigation/routes';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

const ListingsScreen = ({ navigation }) => {
	const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings);

	useEffect(() => {
		loadListings();
	}, []);

	return (
		<Screen style={styles.screen}>
			{error && (
				<React.Fragment>
					<AppText>Couldn't retrive the listings.</AppText>
					<AppButton title="Retry" onPress={loadListings} />
				</React.Fragment>
			)}
			<ActivityIndicator visible={loading} />
			<FlatList
				data={listings}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={'$' + item.price}
						imageUrl={item.images[0].url}
						thumbnailUrl={item.images[0].thumbnailUrl}
						onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
					/>
				)}
			/>
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
		padding: 20
	}
});

export default ListingsScreen;
