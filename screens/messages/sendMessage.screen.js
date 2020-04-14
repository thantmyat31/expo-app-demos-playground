import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, CheckBox, Button, TextInput, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Color from './../../constants/colors.constant';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { addMessageTypeAction } from './../../redux/message/message.action';

const SendMessageScreen = ({ messageTypes, addMessage, navigation }) => {
	const [ dateTime, setDateTime ] = useState();
	const [ isInformation, setIsInformation ] = useState(false);
	const [ isSuggestion, setIsSuggestion ] = useState(false);
	const [ title, setTitle ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ selectedImage, setSelectedImage ] = useState();

	const setDateAndTime = () => {
		const newDate = new Date();
		const date = newDate.toLocaleDateString();
		setDateTime(`${date}`);
	};

	useEffect(() => {
		setDateAndTime();
	}, []);

	const openImagePickerAsync = async () => {
		let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

		if (permissionResult.granted === false) {
			Alert.alert('Insufficient permission!', 'You need to grant camera permission to use this app.', [
				{ text: 'OK', style: 'default' }
			]);
			return;
		}

		let pickerResult = await ImagePicker.launchImageLibraryAsync();
		setSelectedImage(pickerResult.uri);
		console.log(pickerResult.uri);
	};

	const handleOnRemoveImage = () => {
		setSelectedImage(null);
	};

	const handleOnSubmit = () => {
		const getNewDate = new Date();
		const id = getNewDate.toString();
		const messageTypesList = [];
		if (isInformation) {
			messageTypes.push(1);
		} else if (isSuggestion) {
			messageTypes.push(2);
		}
		const messageDetails = {
			id,
			messageTypes: messageTypesList,
			title: title,
			message: message,
			imageUrl: selectedImage
		};
		addMessage(messageDetails);
		navigation.navigate('YourMessages');
	};

	const MsgTypeCheckBox = ({ value, onChange, label }) => {
		return (
			<View style={styles.option}>
				<CheckBox value={value} onValueChange={onChange} style={styles.checkbox} />
				<Text style={styles.optionText}>{label.toUpperCase()}</Text>
			</View>
		);
	};

	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.dateTime}>
					<Text>Date</Text>
					<Text>{dateTime}</Text>
				</View>
				<View style={styles.options}>
					{messageTypes.map((messageType) => (
						<MsgTypeCheckBox
							key={messageType.id}
							value={messageType.id === 1 ? isInformation : isSuggestion}
							onChange={messageType.id === 1 ? setIsInformation : setIsSuggestion}
							label={messageType.type}
						/>
					))}
				</View>
				<View style={styles.details}>
					<Text style={styles.label}>Enter title</Text>
					<TextInput
						value={title}
						style={styles.input}
						multiline={true}
						placeholder="title"
						onChangeText={(text) => setTitle(text)}
					/>
				</View>
				<View style={styles.details}>
					<Text style={styles.label}>Enter a message</Text>
					<TextInput
						value={message}
						style={styles.input}
						multiline={true}
						placeholder="message"
						onChangeText={(text) => setMessage(text)}
					/>
				</View>
				<View style={{ ...styles.details, ...styles.imageDetails }}>
					<Text>Pick an image</Text>
					{selectedImage && <Image style={styles.image} source={{ uri: selectedImage }} />}
					<View style={styles.btn}>
						{!selectedImage ? (
							<Button
								title="take image from gallery"
								color={Color.primaryColor}
								onPress={openImagePickerAsync}
							/>
						) : (
							<Button title="remove image" color={Color.redColor} onPress={handleOnRemoveImage} />
						)}
					</View>
				</View>
				<View style={styles.details}>
					<Button title="send your message" color={Color.primaryColor} onPress={handleOnSubmit} />
				</View>
			</View>
		</ScrollView>
	);
};

SendMessageScreen.navigationOptions = {
	headerTitle: 'Your Messages'
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	dateTime: {
		paddingHorizontal: 20,
		paddingVertical: 30,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	options: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1
	},
	option: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 5
	},
	optionText: {
		fontSize: 16,
		paddingLeft: 20
	},
	details: {
		paddingHorizontal: 20,
		paddingVertical: 20
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: Color.primaryColor,
		paddingVertical: 10
	},
	imageDetails: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	btn: {
		width: '100%',
		marginVertical: 10,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	image: {
		width: '100%',
		height: 200,
		marginVertical: 10
	}
});

const mapStateToProps = (state) => ({
	messageTypes: state.message.messageTypes
});

const mapDispatchToProps = (dispatch) => ({
	addMessage: (messageDetails) => dispatch(addMessageTypeAction(messageDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageScreen);
