import React, { useState } from 'react';
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Modal,
	Image,
	TouchableWithoutFeedback
} from 'react-native';

import { Video } from 'expo-av';

import { ACTIVITIES_DATA } from './../../data/activities.data';

import { Ionicons } from '@expo/vector-icons';

const ActivityDetails = ({ navigation }) => {
	const activityId = navigation.getParam('activityId');
	const itemData = ACTIVITIES_DATA.find((item) => item.id === activityId);
	const [ isModalActive, setIsModalActive ] = useState(false);
	const [ paused, setPaused ] = useState(false);

	const handleOnModalToggle = () => {
		setIsModalActive(!isModalActive);
	};

	const handleButtonPress = () => {};

	const handleButtonStop = () => {};

	return (
		<ScrollView>
			<View style={styles.screen}>
				<TouchableOpacity style={styles.imageContainer} activeOpacity={0.6} onPress={handleOnModalToggle}>
					<ImageBackground style={styles.image} source={{ uri: itemData.imageUrl }}>
						<View style={styles.iconContainer}>
							<Ionicons style={styles.icon} name="ios-play" size={40} color="rgba(0,0,0,0.6)" />
						</View>
					</ImageBackground>
				</TouchableOpacity>
				<View style={styles.details}>
					<Text style={styles.title}>{itemData.title}</Text>
					<Text style={styles.date}>
						<Ionicons name="ios-calendar" size={18} /> {itemData.date}
					</Text>
					<Text style={styles.description}>{itemData.description}</Text>
				</View>
			</View>
			<Modal animationType="slide" transparent={true} visible={isModalActive}>
				<View
					style={{
						backgroundColor: 'rgba(0,0,0,0.7)',
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						height: 300
					}}
				>
					<TouchableWithoutFeedback onPress={handleOnModalToggle}>
						<Text style={styles.closeBtn}>&times;</Text>
					</TouchableWithoutFeedback>

					<Video
						source={{ uri: itemData.videoUrl }}
						posterSource={{
							uri: 'https://media.tenor.com/images/e549f9798674301c5af2c91581194091/tenor.gif'
						}}
						rate={1.0}
						volume={1.0}
						isMuted={false}
						resizeMode="cover"
						shouldPlay={true}
						isLooping
						style={{ width: '100%', height: 300 }}
						useNativeControls={true}
						usePoster={true}
						posterStyle={{ width: '100%', height: '100%' }}
					/>
				</View>
			</Modal>
		</ScrollView>
	);
};

ActivityDetails.navigationOptions = ({ navigation }) => {
	const title = navigation.getParam('activityTitle');
	const headerTitle = title.length > 25 ? title.substring(0, 25) + '...' : title;
	return {
		headerTitle: headerTitle
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	imageContainer: {
		width: '100%'
	},
	image: {
		flexDirection: 'row',
		width: '100%',
		height: 200,
		alignItems: 'center',
		justifyContent: 'center'
	},
	iconContainer: {
		backgroundColor: 'rgba(255,255,255,0.6)',
		width: 50,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25
	},
	details: {
		padding: 10
	},
	title: {
		fontSize: 25,
		letterSpacing: 1
	},
	date: {
		color: '#888',
		fontWeight: 'bold',
		marginVertical: 20,
		letterSpacing: 1
	},
	description: {
		lineHeight: 20,
		letterSpacing: 1
	},
	closeBtn: {
		color: '#ffffff',
		fontSize: 50,
		position: 'absolute',
		top: 10,
		right: 10
	},
	video: {
		width: '100%',
		height: 300
	}
});

export default ActivityDetails;
