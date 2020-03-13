import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LogoComponent = ({ marginVertical }) => {
	return (
		<View style={{ marginVertical: marginVertical }}>
			<Image style={styles.image} source={require('./../assets/img/logo.png')} />
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 250,
		height: 50
	}
});

export default LogoComponent;
