import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';

import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

const LandingScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<ImageBackground
				blurRadius={10}
				style={styles.background}
				source={require('./../assets/image/background.jpg')}
			>
				<View style={styles.titleContainer}>
					<Image style={styles.image} source={require('./../assets/image/logo-red.png')} />
					<Text style={styles.tagLine}>Sell what you don't need.</Text>
				</View>
				<View style={styles.buttonsContainer}>
					<AppButton title="login" onPress={() => navigation.navigate(routes.LOGIN)} />
					<AppButton
						title="register"
						color="secondary"
						onPress={() => navigation.navigate(routes.REGISTER)}
					/>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	background: {
		flex: 1,
		justifyContent: 'space-between'
	},
	titleContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 70
	},
	tagLine: {
		fontSize: 25,
		fontWeight: '600',
		textTransform: 'capitalize',
		paddingVertical: 20
	},
	image: {
		width: 100,
		height: 100
	},
	buttonsContainer: {
		paddingHorizontal: 15
	}
});

export default LandingScreen;
