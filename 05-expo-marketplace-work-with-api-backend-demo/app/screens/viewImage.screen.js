import React from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './../config/colors';

const ViewImageScreen = () => {
	return (
		<View style={styles.screen}>
			<View style={styles.btnContainer}>
				<View style={styles.btn}>
					<MaterialCommunityIcons name="close" size={50} color={colors.white} />
				</View>
				<View style={styles.btn}>
					<MaterialCommunityIcons name="trash-can-outline" size={35} color={colors.white} />
				</View>
			</View>
			<View style={styles.imageContainer}>
				<Image resizeMode="contain" style={styles.image} source={require('./../assets/image/chair.jpg')} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#000',
		paddingTop: StatusBar.currentHeight
	},
	btnContainer: {
		paddingHorizontal: 15,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	btn: {
		height: 50,
		width: 50
	},
	imageContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: '100%',
		height: '100%'
	}
});

export default ViewImageScreen;
