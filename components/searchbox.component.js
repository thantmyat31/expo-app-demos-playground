import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const SearchBox = ({ onChangeText }) => {
	return (
		<View style={styles.searchboxContainer}>
			<TextInput
				style={styles.searchbox}
				placeholder="Search by username or email..."
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	searchboxContainer: {
		paddingVertical: 10
	},
	searchbox: {
		borderWidth: 1,
		borderColor: '#ccc',
		height: 40,
		padding: 10
	}
});

export default SearchBox;
