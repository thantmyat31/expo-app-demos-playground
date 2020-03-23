import React from 'react';
import { StyleSheet, TouchableOpacity, View, ImageBackground, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const ActivityCardComponent = ({ navigation, data }) => {
	return (
		<TouchableOpacity
			activeOpacity={0.6}
			onPress={() =>
				navigation.navigate({
					routeName: 'Activity',
					params: { activityId: data.id, activityTitle: data.title }
				})}
		>
			<View style={styles.card}>
				<ImageBackground style={styles.image} source={{ uri: data.imageUrl }}>
					<View style={styles.iconContainer}>
						<Ionicons style={styles.icon} name="ios-play" size={40} color="rgba(0,0,0,0.6)" />
					</View>
				</ImageBackground>
				<View style={styles.details}>
					<Text style={styles.date}>
						<Ionicons name="ios-calendar" size={18} color="#888" /> {data.date}
					</Text>
					<Text style={styles.title} numberOfLines={1}>
						{data.title}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		width: '100%',
		backgroundColor: '#ffffff',
		borderRadius: 10,
		marginVertical: 10,
		elevation: 3,
		overflow: 'hidden'
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
	icon: {
		marginRight: -5
	},
	details: {
		padding: 10
	},
	date: {
		fontSize: 14,
		color: '#888',
		fontWeight: 'bold'
	},
	title: {
		fontSize: 22
	}
});

export default ActivityCardComponent;
