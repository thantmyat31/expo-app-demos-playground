import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { connect } from 'react-redux';
import { getPlacesAction } from '../redux/places/places.action';

import { HeaderAddButton } from '../components/headerButton.component';
import PlacesList from './../components/placesList.component';
import Color from '../constants/color.constant';

const PlacesScreen = ({ places, navigation, getPlaces }) => {
	useEffect(
		() => {
			getPlaces();
		},
		[ getPlaces ]
	);

	return (
		<View style={styles.screen}>
			<FlatList
				style={styles.listsContainer}
				keyExtractor={(item, index) => item.id}
				data={places}
				renderItem={(itemData) => <PlacesList data={itemData.item} navigation={navigation} />}
			/>
		</View>
	);
};

PlacesScreen.navigationOptions = ({ navigation }) => {
	return {
		headerTitle: 'All Places',
		headerRight: () => (
			<HeaderAddButton name="md-add" type="add" onPress={() => navigation.navigate('NewPlaceForm')} />
		)
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Color.bodyColor,
		justifyContent: 'center',
		alignItems: 'center'
	},
	listsContainer: {
		width: '100%'
	}
});

const mapStateToProps = (state) => ({
	places: state.places.places
});

const mapDispatchToProps = (dispatch) => ({
	getPlaces: () => dispatch(getPlacesAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen);
