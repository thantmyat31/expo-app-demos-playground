import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Keyboard, Alert } from 'react-native';
import { DarkThemeComponent } from './../../components/theme.component';

import Color from './../../constants/colors.constant';
import { InputComponent, LoginRegisterBtnComponent } from './../../components/formInput.component';
import LogoComponent from '../../components/logo.component';
import { connect } from 'react-redux';
import { userLoginAction } from './../../redux/user/user.action';

const LoginScreen = ({ navigation, users, userLoginAction }) => {
	const [ email, setEmail ] = useState();
	const [ password, setPassword ] = useState();
	const handleOnLogin = () => {
		const selectedUser = users.find((user) => user.email === email && user.password === password);

		if (email && password && selectedUser) {
			userLoginAction(selectedUser);
			navigation.navigate('Top');
			return;
		}
		Alert.alert('Login Failed!', 'Please, enter valid email and password', [ { text: 'OK', style: 'default' } ]);
		setEmail('');
		setPassword('');
	};

	return (
		<DarkThemeComponent screenStyle={styles.screenStyle}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={styles.loginRegisterWrapper}>
					<LogoComponent marginVertical={50} />
					<InputComponent
						icon="ios-mail"
						placeholder="Email"
						value={email}
						onChange={(text) => setEmail(text)}
					/>
					<InputComponent
						icon="ios-briefcase"
						placeholder="Password"
						secureTextEntry={true}
						value={password}
						onChange={(text) => setPassword(text)}
					/>
					<LoginRegisterBtnComponent btnName="login" onPress={handleOnLogin} />

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

const mapStateToProps = (state) => ({
	users: state.user.users
});

const mapDispatchToProps = (dispatch) => ({
	userLoginAction: (user) => dispatch(userLoginAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
