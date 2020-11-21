import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, CheckBox, Button, TextInput, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Color from './../../constants/colors.constant';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { addMessageTypeAction } from './../../redux/message/message.action';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const SendMessageScreen = ({ messageTypes, addMessage, navigation, currentUser }) => {
	const [ dateTime, setDateTime ] = useState();
	const [ isInformation, setIsInformation ] = useState(false);
	const [ isSuggestion, setIsSuggestion ] = useState(false);
	const [ title, setTitle ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ selectedImage, setSelectedImage ] = useState();
	let messageTypesList = [];

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
	};

	const handleOnRemoveImage = () => {
		setSelectedImage(null);
	};

	const handleOnSubmit = () => {
		const getNewDate = new Date();
		const userId = currentUser.id;
		const id = getNewDate.toString();
		const date = getNewDate.toLocaleDateString();

		if (isInformation) {
			messageTypesList = [ ...messageTypesList, 1 ];
		}
		if (isSuggestion) {
			messageTypesList = [ ...messageTypesList, 2 ];
		}
		if (!isInformation && !isSuggestion) {
			Alert.alert('Sending failed!', 'Please, choose correctly the type of your message.', [
				{ text: 'OK', style: 'default' }
			]);
			return;
		}

		if (title === '' || message === '') {
			Alert.alert('Request Failed!', 'Please, insert all required fields (*).', [
				{ text: 'OK', style: 'default' }
			]);
			return;
		}

		const messageDetails = {
			id,
			userId: userId,
			messageTypes: messageTypesList,
			title: title,
			message: message,
			imageUrl: selectedImage,
			date
		};
		addMessage(messageDetails);
		navigation.navigate('YourMessages');
	};

	const MsgTypeCheckBox = ({ value, onChange, label }) => {
		return (
			<View style={styles.option}>
				<CheckBox value={value} onValueChange={onChange} style={styles.checkbox} />
				<Text style={styles.optionText}>{label}</Text>
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
					<Text>
						Message Type <FontAwesome name="asterisk" color="#ff0000" size={10} />
					</Text>
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
					<Text style={styles.label}>
						Title <FontAwesome name="asterisk" color="#ff0000" size={10} />
					</Text>
					<TextInput
						value={title}
						style={styles.input}
						multiline={true}
						placeholder="Enter title"
						onChangeText={(text) => setTitle(text)}
					/>
				</View>
				<View style={styles.details}>
					<Text style={styles.label}>
						Message <FontAwesome name="asterisk" color="#ff0000" size={10} />
					</Text>
					<TextInput
						value={message}
						style={styles.input}
						multiline={true}
						placeholder="Enter a message"
						onChangeText={(text) => setMessage(text)}
					/>
				</View>
				<View style={{ ...styles.details, ...styles.imageDetails }}>
					<Text>Pick an image (optional)</Text>
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
	headerTitle: 'Send Message'
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
	messageTypes: state.message.messageTypes,
	currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	addMessage: (messageDetails) => dispatch(addMessageTypeAction(messageDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageScreen);
