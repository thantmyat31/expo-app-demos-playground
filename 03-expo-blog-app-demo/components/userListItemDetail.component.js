import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const UserListItemDetail = ({ label, value, nstyle }) => {
	return (
		<View style={styles.list}>
			<Text style={styles.listText}>{label}</Text>
			<Text style={!nstyle ? { ...styles.listText } : { ...nstyle }}>{value ? value : '-'}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 5,
		paddingHorizontal: 20
	},
	listText: {
		fontSize: 14,
		color: '#555'
	}
});

export default UserListItemDetail;
