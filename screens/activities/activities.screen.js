import React from 'react';
import { View, StyleSheet } from 'react-native';

import { ACTIVITIES_DATA } from './../../data/activities.data';

import ActivityCardComponent from '../../components/activityCard.component';
import { FlatList } from 'react-native-gesture-handler';

const ActivitiesScreen = ({ navigation }) => {
	return (
		<View style={styles.screen}>
			<FlatList
				style={{ width: '100%' }}
				keyExtractor={(item, index) => item.id}
				data={ACTIVITIES_DATA}
				renderItem={(itemData) => <ActivityCardComponent navigation={navigation} data={itemData.item} />}
			/>
		</View>
	);
};

ActivitiesScreen.navigationOptions = () => {
	return {
		headerTitle: 'Activities'
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingHorizontal: 10
	}
});

export default ActivitiesScreen;
