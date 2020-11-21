import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { connect } from 'react-redux';
import { TextInput } from 'react-native-gesture-handler';

import Color from './../../constants/colors.constant';
import { userProfileUpdateAction } from './../../redux/user/user.action';

const UserProfileScreen = ({ currentUser, userProfileUpdateAction }) => {
	const [ modalVisible, setModalVisible ] = useState(false);
	const [ modalLabel, setModalLabel ] = useState();
	const [ township, setTownship ] = useState();
	const [ address, setAddress ] = useState();

	const ProfileDataList = ({ label, value }) => {
		return (
			<View style={styles.row}>
				<Text style={styles.title}>{label}</Text>
				<View style={styles.detail}>
					{value !== '' ? (
						<Text>{value}</Text>
					) : (
						<TouchableOpacity
							style={styles.addDataBtn}
							activeOpacity={0.6}
							onPress={() => handleOnModalOpen(label)}
						>
							<Text style={styles.addDataBtnText}>add {label}</Text>
						</TouchableOpacity>
					)}
				</View>
			</View>
		);
	};

	const handleOnModalOpen = (label) => {
		setModalVisible(true);
		setModalLabel(label);
	};

	const handleOnAddData = (modalLabel) => {
		if (modalLabel.toLowerCase() === 'township') {
			userProfileUpdateAction({ township: township });
		}
		if (modalLabel.toLowerCase() === 'address') {
			userProfileUpdateAction({ address: address });
		}
		setModalVisible(false);
	};

	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.userDataList}>
					<ProfileDataList label="Username" value={currentUser.username} />
					<ProfileDataList label="Email" value={currentUser.email} />
					<ProfileDataList label="Password" value="****************" />
					<ProfileDataList label="Township" value={currentUser.township} />
					<ProfileDataList label="Address" value={currentUser.address} />
				</View>

				<Modal animationType="slide" transparent={true} visible={modalVisible}>
					<View style={styles.modalView}>
						{modalLabel === 'Township' && (
							<TextInput
								style={styles.input}
								placeholder={`Enter your ${modalLabel}`}
								value={township}
								onChangeText={(text) => setTownship(text)}
							/>
						)}
						{modalLabel === 'Address' && (
							<TextInput
								style={styles.input}
								placeholder={`Enter your ${modalLabel.toLowerCase()}`}
								value={address}
								onChangeText={(text) => setAddress(text)}
							/>
						)}
						<View style={styles.modalBtnContainer}>
							<TouchableOpacity style={styles.modalBtn} onPress={() => setModalVisible(false)}>
								<Text style={styles.modalBtnText}>Cancel</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={{ ...styles.modalBtn, ...styles.modalBtnAdd }}
								onPress={() => handleOnAddData(modalLabel)}
							>
								<Text style={styles.modalBtnText}>Add</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	userDataList: {
		borderBottomColor: '#ccc',
		borderBottomWidth: 1,
		paddingHorizontal: 20,
		paddingVertical: 15
	},
	row: {
		flexDirection: 'row',
		paddingVertical: 10
	},
	title: {
		fontWeight: 'bold',
		width: '35%'
	},
	detail: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '65%',
		paddingLeft: 10
	},
	addDataBtn: {
		backgroundColor: Color.loginBtnColor,
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingVertical: 3,
		elevation: 3
	},
	addDataBtnText: {
		fontSize: 10,
		textTransform: 'uppercase',
		color: '#ffffff'
	},
	modalView: {
		marginVertical: 100,
		marginHorizontal: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
		elevation: 5
	},
	modalBtnContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 20
	},
	input: {
		borderWidth: 1,
		borderColor: '#ccc',
		paddingVertical: 10,
		paddingHorizontal: 10,
		width: '100%',
		borderRadius: 10
	},
	modalBtn: {
		paddingVertical: 5,
		paddingHorizontal: 20,
		borderRadius: 5,
		backgroundColor: Color.redColor
	},
	modalBtnAdd: {
		backgroundColor: Color.loginBtnColor
	},
	modalBtnText: {
		color: '#ffffff',
		textTransform: 'uppercase'
	}
});

const mapStateToProp = (state) => ({
	currentUser: state.user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
	userProfileUpdateAction: (data) => dispatch(userProfileUpdateAction(data))
});

export default connect(mapStateToProp, mapDispatchToProps)(UserProfileScreen);
