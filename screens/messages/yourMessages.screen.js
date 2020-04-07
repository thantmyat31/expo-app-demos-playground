import React from 'react';
import { View, StyleSheet } from 'react-native';
import MessagesListItem from '../../components/messagesListItem.component';

const YourMessagesScreen = ({ navigation }) => {
	const handleOnNavigate = () => {
		navigation.navigate('MessageDetails');
	};
	return (
		<View style={styles.screen}>
			<MessagesListItem onPress={handleOnNavigate} />
		</View>
	);
};

YourMessagesScreen.navigationOptions = {
	headerTitle: 'Your Messages'
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});

export default YourMessagesScreen;
