import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const NewListingButton = ({ onPress }) => {
	return (
		<TouchableOpacity activeOpacity={0.7} onPress={onPress}>
			<View style={styles.container}>
				<MaterialCommunityIcons name="plus-circle" size={40} color={colors.white} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: colors.primary,
		borderWidth: 5,
		borderColor: colors.white,
		justifyContent: 'center',
		alignItems: 'center',
		bottom: 25
	}
});

export default NewListingButton;
