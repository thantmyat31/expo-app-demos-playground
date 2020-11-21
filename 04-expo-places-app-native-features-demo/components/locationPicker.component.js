import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, Alert, StyleSheet } from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import Color from './../constants/color.constant';
import MapPreview from './mapPreview.component';

const LocationPicker = ({ navigation, onPickedLocation }) => {
	const [ isFetching, setIsFetching ] = useState(false);
	const [ pickedLocation, setPickedLocation ] = useState();
	const mapPickedLocation = navigation.getParam('pickedLocation');

	useEffect(
		() => {
			if (mapPickedLocation) {
				setPickedLocation(mapPickedLocation);
			}
			onPickedLocation(pickedLocation);
		},
		[ mapPickedLocation, onPickedLocation, isFetching ]
	);

	const verifyPermission = async () => {
		const result = await Permissions.askAsync(Permissions.LOCATION);
		if (result.status !== 'granted') {
			Alert.alert('Insufficient permission!', 'You need to grant location permission to use this app.', [
				{ text: 'OK', style: 'default' }
			]);
			return false;
		}
		return true;
	};

	const handleOnGetLocation = async () => {
		const hasPermission = await verifyPermission();
		if (!hasPermission) {
			return;
		}
		try {
			setIsFetching(true);
			const location = await Location.getCurrentPositionAsync({
				timeout: 10000
			});
			setPickedLocation({ lat: location.coords.latitude, lng: location.coords.longitude });
		} catch (err) {
			Alert.alert('Could not fetch location!', 'Please try again later or pick the location on the map', [
				{ text: 'OK', style: 'default' }
			]);
		}
		setIsFetching(false);
	};

	const handleOnPickOnMap = () => {
		navigation.navigate('Map');
	};

	return (
		<View style={styles.locationPicker}>
			<MapPreview location={pickedLocation} style={styles.mapPreview}>
				{isFetching ? (
					<ActivityIndicator size="large" color={Color.primary} />
				) : (
					<Text>No location chosen yet!</Text>
				)}
			</MapPreview>
			<View style={styles.btnGroup}>
				<Button title="get location" color={Color.dark} onPress={handleOnGetLocation} />
				<Button title="pick on map" color={Color.dark} onPress={handleOnPickOnMap} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	locationPicker: {
		marginBottom: 15,
		alignItems: 'center'
	},
	btnGroup: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%'
	},
	mapPreview: {
		marginBottom: 15,
		backgroundColor: '#ffffff'
	}
});

export default LocationPicker;
