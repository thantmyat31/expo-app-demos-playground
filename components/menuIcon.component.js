import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MenuIcon = ({ onPress }) => {
	return (
		<TouchableOpacity style={styles.icon}>
			<Ionicons name="md-menu" color="#fff" size={35} onPress={onPress} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	icon: {
		width: 35,
		height: 35,
		marginLeft: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default MenuIcon;
