import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Button } from 'react-native';
import Color from '../constants/color.constant';
import { addNewPlace } from './../redux/places/places.action';
import { connect } from 'react-redux';
import ImagePickerComp from '../components/imagePicker.component';
import LocationPicker from '../components/locationPicker.component';

const NewPlaceFormScreen = ({ navigation, addNewPlace }) => {
	const [ titleValue, setTitleValue ] = useState('');
	const [ selectedImage, setSelectedImage ] = useState('');
	const [ selectedLocation, setSelectedLocation ] = useState();

	const handleOnTextChange = (text) => {
		setTitleValue(text);
	};

	const handleOnImageTaken = (imagePath) => {
		setSelectedImage(imagePath);
	};

	const handleOnPickedLocation = async (location) => {
		await setSelectedLocation(location);
	};

	const handleOnSubmit = () => {
		addNewPlace(titleValue, selectedImage, selectedLocation);
		navigation.goBack();
	};

	return (
		<View style={styles.screen}>
			<ScrollView>
				<View style={styles.form}>
					<Text style={styles.label}>Title</Text>
					<TextInput
						style={styles.input}
						onChangeText={(text) => handleOnTextChange(text)}
						value={titleValue}
					/>
					<ImagePickerComp onImageTaken={handleOnImageTaken} />
					<LocationPicker
						navigation={navigation}
						onPickedLocation={handleOnPickedLocation}
						style={styles.bgPicker}
					/>
					<Button title="save place" color={Color.dark} onPress={handleOnSubmit} />
				</View>
			</ScrollView>
		</View>
	);
};

NewPlaceFormScreen.navigationOptions = () => {
	return {
		headerTitle: 'New Place'
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: Color.bodyColor
	},
	form: {
		padding: 20
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: '#888',
		marginVertical: 15,
		lineHeight: 25,
		height: 30,
		fontSize: 18
	}
});

const mapDispatchToProps = (dispatch) => ({
	addNewPlace: (title, imageUri, location) => dispatch(addNewPlace(title, imageUri, location))
});

export default connect(null, mapDispatchToProps)(NewPlaceFormScreen);
