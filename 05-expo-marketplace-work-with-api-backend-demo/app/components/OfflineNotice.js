import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

import AppText from './AppText';
import colors from '../config/colors';

const OfflineNotice = () => {
	const netInfo = useNetInfo();

	if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
		return (
			<View style={styles.container}>
				<AppText style={styles.text}>No internet connection</AppText>
			</View>
		);
	}
	return null;
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		height: 50,
		position: 'absolute',
		top: Constants.statusBarHeight,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 1,
		elevation: 1
	},
	text: {
		color: '#fff'
	}
});

export default OfflineNotice;
