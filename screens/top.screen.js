import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch, Alert } from 'react-native';
import CardComponent from './../components/card.component';
import { DarkThemeComponent } from '../components/theme.component';
import LogoComponent from '../components/logo.component';
import { connect } from 'react-redux';

const TopScreen = (props) => {
	const [ lang, setLang ] = useState(false);
	const { navigation, currentUser } = props;

	const handleOnCheckCurrentUser = () => {
		if (!currentUser) {
			Alert.alert('Not Authorized!', 'You are not logged in. Please, press "Yes" to go login page.', [
				{ text: 'Yes', style: 'destructive', onPress: () => navigation.navigate({ routeName: 'Login' }) },
				{ text: 'No', style: 'cancel' }
			]);
			return;
		}
		navigation.navigate({ routeName: 'Message' });
	};

	return (
		<DarkThemeComponent>
			<View style={styles.langSetting}>
				<Text style={styles.lang}>EN</Text>
				<Switch value={lang} trackColor={{ true: '#ffffff' }} onValueChange={(nextLang) => setLang(nextLang)} />
				<Text style={styles.lang}>MY</Text>
			</View>
			<LogoComponent marginVertical={20} />
			<View style={styles.wrapper}>
				<CardComponent
					btnStyles={styles.aboutGuide}
					onPress={() => navigation.navigate({ routeName: 'About' })}
					name="About"
				/>
				<CardComponent
					btnStyles={styles.aboutGuide}
					onPress={() => navigation.navigate({ routeName: 'Guide' })}
					name="Guide"
				/>
			</View>
			<View style={styles.wrapper}>
				<CardComponent
					onPress={() => navigation.navigate({ routeName: 'NewsCategories' })}
					name="News Categories"
				/>
				<CardComponent onPress={() => navigation.navigate({ routeName: 'Activities' })} name="Activities" />
			</View>
			<View style={styles.wrapper}>
				<CardComponent onPress={handleOnCheckCurrentUser} name="Message" />
				<CardComponent onPress={() => navigation.navigate({ routeName: 'Others' })} name="Others" />
			</View>
			<View style={styles.wrapper}>
				<CardComponent
					onPress={() => navigation.navigate({ routeName: 'Login' })}
					name="Login"
					loginBtnStyle={styles.loginBtn}
				/>
			</View>
		</DarkThemeComponent>
	);
};

TopScreen.navigationOptions = {
	headerShown: false
};

const styles = StyleSheet.create({
	langSetting: {
		flexDirection: 'row',
		width: '100%',
		paddingBottom: 20,
		paddingHorizontal: 20,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	lang: {
		color: '#ffffff'
	},
	wrapper: {
		paddingHorizontal: 10,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},

	aboutGuide: {
		height: 50
	},
	loginBtn: {
		width: 274,
		height: 50,
		backgroundColor: '#1e6b6d'
	}
});

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(TopScreen);
