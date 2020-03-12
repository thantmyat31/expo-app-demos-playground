import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Switch } from 'react-native';
import CardComponent from './../components/card.component';

const TopScreen = (props) => {
	const [ lang, setLang ] = useState(false);
	const { navigation } = props;
	return (
		<View style={styles.screen}>
			<View style={styles.langSetting}>
				<Text style={styles.lang}>EN</Text>
				<Switch value={lang} trackColor={{ true: '#ffffff' }} onValueChange={(nextLang) => setLang(nextLang)} />
				<Text style={styles.lang}>MY</Text>
			</View>
			<Image style={styles.image} source={require('../assets/img/logo.png')} />
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
				<CardComponent onPress={() => navigation.navigate({ routeName: 'Message' })} name="Message" />
				<CardComponent onPress={() => navigation.navigate({ routeName: 'Others' })} name="Others" />
			</View>
			<View style={styles.wrapper}>
				<CardComponent
					onPress={() => navigation.navigate({ routeName: 'Login' })}
					name="Login"
					loginBtnStyle={styles.loginBtn}
				/>
			</View>
		</View>
	);
};

TopScreen.navigationOptions = {
	headerShown: false
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#3d3d3d'
	},
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
	image: {
		width: 250,
		height: 50,
		marginVertical: 20
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

export default TopScreen;
