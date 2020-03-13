import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, TouchableOpacity, Keyboard } from 'react-native';
import { DarkThemeComponent } from './../../components/theme.component';

import Color from './../../constants/colors.constant';
import { InputComponent, LoginRegisterBtnComponent } from './../../components/formInput.component';
import LogoComponent from '../../components/logo.component';

const LoginScreen = ({ navigation }) => {
	return (
		<DarkThemeComponent screenStyle={styles.screenStyle}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.loginRegisterWrapper}>
					<LogoComponent marginVertical={50} />
					<InputComponent icon="ios-person" placeholder="Username" />
					<InputComponent icon="ios-briefcase" placeholder="Password" secureTextEntry={true} />
					<LoginRegisterBtnComponent btnName="login" />

					<View style={styles.row}>
						<Text style={styles.textWhite}>I don't have an account yet.</Text>
						<TouchableOpacity
							activeOpacity={0.6}
							onPress={() => navigation.navigate({ routeName: 'Register' })}
						>
							<Text style={styles.textPrimary}>Create one</Text>
						</TouchableOpacity>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</DarkThemeComponent>
	);
};

const styles = StyleSheet.create({
	screenStyle: {
		justifyContent: 'flex-start'
	},
	loginRegisterWrapper: {
		alignItems: 'center'
	},
	imageContainer: {
		marginVertical: 50
	},
	row: { flexDirection: 'row' },
	textWhite: { color: Color.textWhite },
	textPrimary: { color: Color.textPrimary }
});

export default LoginScreen;
