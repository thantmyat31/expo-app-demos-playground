import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const HeaderAddButton = ({ name, type, onPress }) => {
	return (
		<TouchableOpacity style={styles.headerButton} activeOpacity={0.7} onPress={onPress}>
			<Ionicons name={type && name} size={30} color="#ffffff" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	headerButton: {
		marginRight: 10,
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
