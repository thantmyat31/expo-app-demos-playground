import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CardComponent = (props) => {
	return (
		<TouchableOpacity
			style={{ ...styles.btn, ...props.btnStyles, ...props.loginBtnStyle }}
			activeOpacity={0.6}
			onPress={props.onPress}
		>
			<Text style={{ ...styles.btnName, ...props.btnNameStyle }}>{props.name}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	btn: {
		width: 130,
		height: 130,
		margin: 7,
		padding: 10,
		backgroundColor: '#7acbcd',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		elevation: 3
	},
	btnName: {
		color: '#ffffff',
		textAlign: 'center',
		textTransform: 'uppercase'
	}
});

export default CardComponent;
