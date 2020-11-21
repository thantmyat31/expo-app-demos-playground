import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import ENV from './../env';
import Color from './../constants/color.constant';

const MapPreview = (props) => {
	let imagePreviewUrl;
	if (props.location) {
		imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location
			.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:C%7C${props.location.lat},${props
			.location.lng}&key=${ENV.googleMapApi}`;
	}

	return (
		<View style={{ ...styles.mapPreview, ...props.style }}>
			{props.location ? <Image source={{ uri: imagePreviewUrl }} style={styles.image} /> : props.children}
		</View>
	);
};

const styles = StyleSheet.create({
	mapPreview: {
		width: '100%',
		height: 150,
		borderWidth: 1,
		borderColor: Color.primary,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: '100%',
		height: '100%'
	}
});

export default MapPreview;
