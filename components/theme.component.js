import React from 'react';
import { View, StyleSheet } from 'react-native';

import Color from '../constants/colors.constant';

export const PrimaryThemeComponent = ({ children, screenStyle }) => {
	return <View style={{ ...styles.screen, ...styles.primaryScreen, ...screenStyle }}>{children}</View>;
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	primaryScreen: {
		backgroundColor: Color.primaryTheme.screenBackground
	}
});
