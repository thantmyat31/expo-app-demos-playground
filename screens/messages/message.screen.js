import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Color from './../../constants/colors.constant';
import { Ionicons } from '@expo/vector-icons';

const MessageScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<TouchableOpacity
				activeOpacity={0.6}
				style={styles.messageContainer}
				onPress={() => navigation.navigate('YourMessages')}
			>
				<Ionicons name="md-mail" size={30} color={Color.primaryTheme.headerBackground} />
				<Text style={styles.mail}>Your Messages</Text>
			</TouchableOpacity>
			<TouchableOpacity
				activeOpacity={0.6}
				style={styles.messageContainer}
				onPress={() => navigation.navigate('SendMessage')}
			>
				<Ionicons name="md-send" size={30} color={Color.primaryTheme.headerBackground} />
				<Text style={styles.mail}>Send Message</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'flex-start',
		padding: 10
	},
	messageContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 30,
		marginBottom: 10,
		elevation: 3,
		backgroundColor: Color.primaryColor
	},
	mail: {
		fontSize: 18,
		marginLeft: 10,
		color: Color.primaryTheme.headerBackground
	}
});

export default MessageScreen;
