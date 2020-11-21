import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

const AppTextInput = ({ icon, width = '100%', ...otherProps }) => {
	return (
		<View style={[ styles.container, { width } ]}>
			{icon && (
				<MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={defaultStyles.colors.medium} />
			)}
			<TextInput placeholderTextColor={defaultStyles.colors.medium} style={defaultStyles.text} {...otherProps} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 25,
		flexDirection: 'row',
		padding: 15,
		marginVertical: 10
	},
	icon: {
		marginRight: 10
	}
});

export default AppTextInput;
