import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { HeaderAddButton } from './../components/headerButton.component';

const MapScreen = ({ navigation }) => {
	const initialLocation = navigation.getParam('initialLocation');
	const readOnly = navigation.getParam('readOnly');
	const [ selectedLocation, setSelectLocation ] = useState(initialLocation);

	const mapRegion = {
		latitude: initialLocation ? initialLocation.lat : 16.7986,
		longitude: initialLocation ? initialLocation.lng : 96.1495,
		latitudeDelta: 0.01,
		longitudeDelta: 0.01
	};

	const handleOnSelectLocation = (ev) => {
		if (readOnly) {
			return;
		}
		setSelectLocation({ lat: ev.nativeEvent.coordinate.latitude, lng: ev.nativeEvent.coordinate.longitude });
	};

	let markerLocation;
	if (selectedLocation) {
		markerLocation = {
			latitude: selectedLocation.lat,
			longitude: selectedLocation.lng
		};
	}

	const handleOnSavePickedLocation = useCallback(
		() => {
			if (!selectedLocation) {
				// Can show alert here!
				return;
			}
			navigation.navigate('NewPlaceForm', { pickedLocation: selectedLocation });
		},
		[ selectedLocation ]
	);

	useEffect(
		() => {
			navigation.setParams({ saveLocation: handleOnSavePickedLocation });
		},
		[ handleOnSavePickedLocation ]
	);

	return (
		<View style={styles.screen}>
			<MapView style={styles.mapView} region={mapRegion} onPress={handleOnSelectLocation}>
				{markerLocation && <Marker title="Picked location" coordinate={markerLocation} />}
			</MapView>
		</View>
	);
};

MapScreen.navigationOptions = ({ navigation }) => {
	const saveLocation = navigation.getParam('saveLocation');
	const readOnly = navigation.getParam('readOnly');
	if (readOnly) {
		return {
			headerTitle: 'Map'
		};
	}
	return {
		headerTitle: 'Map',
		headerRight: () => <HeaderAddButton type="save" name="md-save" onPress={saveLocation} />
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	mapView: {
		width: '100%',
		height: '100%'
	}
});

export default MapScreen;
