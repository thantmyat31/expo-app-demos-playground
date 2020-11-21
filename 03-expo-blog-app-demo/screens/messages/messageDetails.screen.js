import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

const MessageDetailsScreen = ({ navigation, messages, users }) => {
	const messageId = navigation.getParam('messageId');
	const selectedMessage = messages.find((message) => message.id === messageId);
	const author = users.find((user) => user.id === selectedMessage.userId);
	const authorName = author.username;

	return (
		<ScrollView>
			<View style={styles.screen}>
				<Text style={styles.title}>{selectedMessage.title}</Text>
				{selectedMessage.imageUrl && <Image source={{ uri: selectedMessage.imageUrl }} style={styles.image} />}
				<View style={styles.options}>
					<Text style={styles.authorDate}>
						<Ionicons name="md-person" size={16} color="#888" /> {authorName}
					</Text>
					<Text style={styles.authorDate}>
						<Ionicons name="md-calendar" size={16} color="#888" /> {selectedMessage.date}
					</Text>
				</View>
				<Text style={styles.message}>{selectedMessage.message}</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 20
	},
	title: {
		fontSize: 27,
		fontWeight: 'bold',
		marginBottom: 10
	},
	options: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 15
	},
	image: {
		width: '100%',
		height: 300
	},
	authorDate: { color: '#888' },
	message: {
		fontSize: 18
	}
});

const mapStateToProps = (state) => ({
	messages: state.message.messages,
	users: state.user.users
});

export default connect(mapStateToProps)(MessageDetailsScreen);
