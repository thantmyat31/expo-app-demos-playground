import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const FormInput = ({ label, value, handleChangeText, isValid, ...rest }) => (
	<View style={styles.formControl}>
		<Text style={styles.label}>{label}</Text>
		<TextInput
			{...rest}
			style={styles.input}
			value={value}
			onChangeText={handleChangeText}
			keyboardType="default"
			autoCapitalize="sentences"
			autoCorrect={false}
			returnKeyType="next"
		/>
		{!isValid && <Text style={styles.empty}>Please enter a valid {label}</Text>}
	</View>
);

const styles = StyleSheet.create({
	formControl: {
		marginVertical: 10
	},
	label: {
		fontWeight: 'bold'
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		height: 40,
		lineHeight: 40
	},
	empty: {
		color: '#ff0000'
	}
});

export default FormInput;
