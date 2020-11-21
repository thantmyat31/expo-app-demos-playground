import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';

import { useSelector, connect } from 'react-redux';

import MapPreview from '../components/mapPreview.component';
import Color from './../constants/color.constant';
import { deletePlaceAction } from './../redux/places/places.action';

const PlaceDetailsScreen = ({ navigation, deletePlaceAction }) => {
	const placeId = navigation.getParam('placeId');
	const selectedPlace = useSelector((state) => state.places.places.find((place) => place.id === placeId));
	const location = selectedPlace && { lat: selectedPlace.lat, lng: selectedPlace.lng };

	const handleOnShowMap = () => {
		navigation.navigate('Map', { readOnly: true, initialLocation: location });
	};

	const handleOnDeletePlace = () => {
		Alert.alert('Are you sure ?', 'Do you really want to delete this place ?', [
			{ text: 'No', style: 'cancel' },
			{
				text: 'Yes',
				style: 'destructive',
				onPress: () => {
					deletePlaceAction(placeId);
					navigation.goBack();
				}
			}
		]);
		return;
	};

	return (
		<ScrollView>
			{selectedPlace && (
				<View style={styles.screen}>
					<View style={styles.imageContainer}>
						<Image source={{ uri: selectedPlace.image }} style={styles.image} />
					</View>
					<View style={styles.detailsContainer}>
						<View style={styles.details}>
							<Text style={styles.address}>{selectedPlace.address}</Text>
							<TouchableOpacity activeOpacity={0.7} onPress={handleOnShowMap}>
								<MapPreview location={location} style={styles.mapPreview} />
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.delete}>
						<Button title="delete place" color={Color.dark} onPress={handleOnDeletePlace} />
					</View>
				</View>
			)}
		</ScrollView>
	);
};

PlaceDetailsScreen.navigationOptions = ({ navigation }) => {
	const title = navigation.getParam('placeTitle');
	return {
		headerTitle: title || 'Place Details'
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageContainer: {
		width: '100%',
		height: 300,
		backgroundColor: '#ffffff',
		elevation: 5,
		marginBottom: 20
	},
	image: {
		width: '100%',
		height: '100%'
	},
	detailsContainer: {
		paddingHorizontal: 20,
		width: '100%',
		marginBottom: 15
	},
	details: {
		width: '100%',
		backgroundColor: '#ffffff',
		borderColor: '#ccc',
		borderWidth: 1,
		borderRadius: 10,
		overflow: 'hidden'
	},
	address: {
		padding: 10,
		backgroundColor: '#ffffff',
		color: Color.dark,
		textAlign: 'center'
	},
	mapPreview: {
		width: '100%',
		height: 250,
		borderWidth: 0
	},
	delete: {
		paddingBottom: 20
	}
});

const mapDispatchToProps = (dispatch) => ({
	deletePlaceAction: (id) => dispatch(deletePlaceAction(id))
});

export default connect(null, mapDispatchToProps)(PlaceDetailsScreen);
