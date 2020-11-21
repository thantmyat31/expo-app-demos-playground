import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MessagesListItem from '../../components/messagesListItem.component';
import { connect } from 'react-redux';

const YourMessagesScreen = ({ navigation, messages }) => {
	const handleOnNavigate = (messageId) => {
		navigation.navigate('MessageDetails', { messageId: messageId });
	};
	return (
		<View style={styles.screen}>
			{messages && (
				<FlatList
					keyExtractor={(item, index) => item.id}
					data={messages}
					renderItem={(message) => (
						<MessagesListItem onPress={() => handleOnNavigate(message.item.id)} data={message.item} />
					)}
				/>
			)}
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

const mapStatetoProps = (state) => ({
	messages: state.message.messages
});

export default connect(mapStatetoProps)(YourMessagesScreen);
