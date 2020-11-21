import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const CustomFonts = ({ children, style }) => {
	return <Text style={{ ...styles.regular, ...style }}>{children}</Text>;
};

export const CustomFontsBold = ({ children, style }) => {
	return <Text style={{ ...styles.bold, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
	regular: {
		fontFamily: 'open-sans'
	},
	bold: {
		fontFamily: 'open-sans-bold'
	}
});
