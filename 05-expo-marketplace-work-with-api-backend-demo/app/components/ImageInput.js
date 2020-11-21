import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import colors from './../config/colors';

const ImageInput = ({ imageUri, onChangeImage }) => {
	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
		if (!granted) {
			alert('You need to enable permission access to the library.');
		}
	};

	useEffect(() => {
		requestPermission();
	}, []);

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5
			});
			if (!result.cancelled) onChangeImage(result.uri);
		} catch (error) {
			console.log('Error on reading image', error);
		}
	};

	const handlePress = () => {
		if (!imageUri) selectImage();
		else
			Alert.alert('Remove image!', 'Are you sure you want to delete this image ?', [
				{ text: 'No', style: 'cancel' },
				{
					text: 'Yes',
					style: 'destructive',
					onPress: () => {
						onChangeImage(null);
					}
				}
			]);
	};

	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{imageUri ? (
					<Image source={{ uri: imageUri }} style={styles.image} />
				) : (
					<MaterialCommunityIcons name="camera" size={40} color={colors.medium} />
				)}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 100,
		height: 100,
		borderRadius: 15,
		backgroundColor: colors.light,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: '100%'
	}
});

export default ImageInput;
