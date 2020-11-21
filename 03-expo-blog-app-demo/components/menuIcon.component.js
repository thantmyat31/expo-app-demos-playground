import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MenuIcon = ({ iconName, onPress }) => {
	return (
		<TouchableOpacity activeOpacity={0.6} style={styles.icon} onPress={onPress}>
			<Ionicons name={iconName} color="#fff" size={35} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	icon: {
		width: 35,
		height: 40,
		marginLeft: 10,
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default MenuIcon;
