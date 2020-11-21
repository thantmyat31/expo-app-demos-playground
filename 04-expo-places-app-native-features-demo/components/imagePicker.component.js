import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Color from '../constants/color.constant';

const ImagePickerComp = ({ onImageTaken }) => {
	const [ pickedImage, setPickedImage ] = useState('');
	const verifyPermission = async () => {
		const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
		if (result.status !== 'granted') {
			Alert.alert('Insufficient permission!', 'You need to grant camera permission to use this app.', [
				{ text: 'OK', style: 'default' }
			]);
			return false;
		}
		return true;
	};

	const handleOnTakeImage = async () => {
		const hasPermission = await verifyPermission();
		if (!hasPermission) {
			return;
		}
		const image = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [ 16, 9 ],
			quality: 0.5
		});
		setPickedImage(image.uri);
		onImageTaken(image.uri);
	};

	return (
		<View style={styles.imagePicker}>
			<View style={styles.previewContainer}>
				{!pickedImage ? (
					<Text>No image picked yet.</Text>
				) : (
					<Image style={styles.image} source={{ uri: pickedImage }} />
				)}
			</View>
			<Button title="Take Image" color={Color.dark} onPress={handleOnTakeImage} />
		</View>
	);
};

const styles = StyleSheet.create({
	imagePicker: {
		alignItems: 'center',
		marginVertical: 20
	},
	previewContainer: {
		width: '100%',
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: Color.primary,
		marginBottom: 15,
		backgroundColor: '#ffffff'
	},
	image: {
		width: '100%',
		height: '100%'
	}
});

export default ImagePickerComp;
