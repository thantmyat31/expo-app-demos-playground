import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ACTIVITIES_DATA } from './../../data/activities.data';

import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const ActivityDetails = ({ navigation }) => {
	const activityId = navigation.getParam('activityId');
	const itemData = ACTIVITIES_DATA.find((item) => item.id === activityId);
	const [ isPlayed, setIsPlayed ] = useState(false);

	const handleOnModalToggle = () => {
		setIsPlayed(true);
	};

	return (
		<ScrollView>
			<View style={styles.screen}>
				<TouchableOpacity style={styles.imageContainer} activeOpacity={0.6} onPress={handleOnModalToggle}>
					{!isPlayed ? (
						<ImageBackground style={styles.image} source={{ uri: itemData.imageUrl }}>
							<View style={styles.iconContainer}>
								<Ionicons style={styles.icon} name="ios-play" size={40} color="rgba(0,0,0,0.6)" />
							</View>
						</ImageBackground>
					) : (
						<Video
							source={{ uri: itemData.videoUrl }}
							rate={1.0}
							volume={1.0}
							isMuted={false}
							resizeMode="cover"
							shouldPlay={true}
							isLooping={false}
							style={styles.video}
							useNativeControls={true}
						/>
					)}
				</TouchableOpacity>
				<View style={styles.details}>
					<Text style={styles.title}>{itemData.title}</Text>
					<Text style={styles.date}>
						<Ionicons name="ios-calendar" size={18} /> {itemData.date}
					</Text>
					<Text style={styles.description}>{itemData.description}</Text>
				</View>
			</View>
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
	video: {
		width: '100%',
		height: 200
	}
});

export default ActivityDetails;
