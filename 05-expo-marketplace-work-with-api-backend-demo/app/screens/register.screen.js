import React from 'react';
import { StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from './../components/forms';

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label('Name'),
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password')
});

const RegisterScreen = () => {
	return (
		<Screen style={styles.screen}>
			<AppForm
				initialValues={{ name: '', email: '', password: '' }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="account"
					placeholder="Name"
					textContentType="name"
					name="name"
				/>
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
				<SubmitButton title="Register" />
			</AppForm>
		</Screen>
	);
};

const styles = StyleSheet.create({
	screen: {
		padding: 15
	}
});

export default RegisterScreen;
