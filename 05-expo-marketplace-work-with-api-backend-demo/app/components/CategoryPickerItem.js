import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Icon from './Icon';
import AppText from './AppText';

const CategoryPickerItem = ({ item, onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
		<View style={styles.container}>
			<Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
			<AppText style={styles.label}>{item.label}</AppText>
		</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 15,
		paddingHorizontal: 20,
		alignItems: 'center',
		width: '33%'
	},
	label: {
		marginTop: 5,
		textAlign: 'center'
	}
});

export default CategoryPickerItem;
