import React from 'react';
import { StyleSheet, Image } from 'react-native';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from './../components/forms';

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password')
});

const LoginScreen = () => {
	return (
		<Screen style={styles.screen}>
			<Image style={styles.logo} source={require('./../assets/image/logo-red.png')} />
			<AppForm
				initialValues={{ email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					keyboardType="email-address"
					icon="email"
					placeholder="Email"
					textContentType="emailAddress"
					name="email"
				/>
				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					secureTextEntry
					icon="lock"
					placeholder="Password"
					textContentType="password"
					name="password"
				/>
				<SubmitButton title="Login" />
			</AppForm>
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: {
		padding: 15
	},
	logo: {
		width: 80,
		height: 80,
		marginTop: 50,
		marginBottom: 20,
		alignSelf: 'center'
	}
});

export default LoginScreen;
