import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export const InputComponent = ({ icon, placeholder, secureTextEntry, value, onChange }) => {
	return (
		<View style={styles.inputContainer}>
			<Ionicons name={icon} size={25} style={styles.icon} color="#3d3d3d" />
			<TextInput
				value={value}
				onChangeText={onChange}
				secureTextEntry={secureTextEntry}
				style={styles.input}
				placeholder={placeholder}
			/>
		</View>
	);
};

export const LoginRegisterBtnComponent = ({ btnName, onPress }) => {
	return (
		<View style={styles.inputContainer}>
			<TouchableOpacity activeOpacity={0.6} style={styles.loginRegisterBtn} onPress={onPress}>
				<Text style={styles.btn}>{btnName}</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		width: 290,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		height: 45,
		marginBottom: 20
	},
	icon: { position: 'absolute', left: 10, zIndex: 999 },
	input: {
		width: '100%',
		height: 45,
		paddingVertical: 10,
		paddingLeft: 40,
		paddingRight: 10,
		backgroundColor: '#ffffff'
	},

	loginRegisterBtn: {
		width: '100%',
		height: '100%',
		backgroundColor: '#7acbcd',
		justifyContent: 'center',
		alignItems: 'center'
	},
	btn: { color: '#ffffff', textTransform: 'uppercase' }
});
