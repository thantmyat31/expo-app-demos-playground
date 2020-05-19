import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Color from './../constants/colors.constant';

const DashboardIcon = ({ label, iconName, value, onPress }) => {
	return (
		<TouchableOpacity activeOpacity={0.6} style={styles.info} onPress={onPress}>
			<Text style={styles.title}>{label}</Text>
			<Ionicons name={iconName} color="#aaa" size={50} />
			<Text style={styles.count}>{value}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	info: {
		width: '47%',
		alignItems: 'center',
		flexDirection: 'column',
		paddingHorizontal: 10,
		paddingVertical: 20,
		backgroundColor: '#ddd',
		marginBottom: 10
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#555',
		marginBottom: 10
	},
	count: {
		fontSize: 30,
		color: Color.primaryColor
	}
});

export default DashboardIcon;
