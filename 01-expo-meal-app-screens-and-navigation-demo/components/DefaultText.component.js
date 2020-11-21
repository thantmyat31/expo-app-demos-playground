import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const DefaultText = ({ children, style }) => {
	return <Text style={{ ...styles.defaultText, ...style }}>{children}</Text>;
};

export const DefaultTextBold = ({ children, style }) => {
	return <Text style={{ ...styles.defaultTextBold, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
	defaultText: {
		fontFamily: 'open-sans'
	},
	defaultTextBold: {
		fontFamily: 'open-sans-bold'
	}
});
