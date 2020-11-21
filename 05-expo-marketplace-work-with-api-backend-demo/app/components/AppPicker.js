import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Modal, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import AppText from './AppText';
import AppButton from './AppButton';

import defaultStyles from '../config/styles';
import PickerItem from './PickerItem';

const AppPicker = ({
	icon,
	items,
	placeholder,
	selectedItem,
	onSelectItem,
	width = '100%',
	PickerItemComponent = PickerItem,
	numberOfColumns = 1
}) => {
	const [ modalVisible, setModalVisible ] = useState(false);

	return (
		<React.Fragment>
			<TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
				<View style={[ styles.container, { width } ]}>
					{icon && (
						<MaterialCommunityIcons
							style={styles.icon}
							name={icon}
							size={20}
							color={defaultStyles.colors.medium}
						/>
					)}
					{selectedItem ? (
						<AppText style={styles.text}>{selectedItem.label}</AppText>
					) : (
						<AppText style={styles.placeholder}>{placeholder}</AppText>
					)}

					<MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
				</View>
			</TouchableWithoutFeedback>
			<Modal visible={modalVisible} animationType="slide">
				<Screen style={styles.screen}>
					<View style={styles.buttonContainer}>
						<AppButton title="close" onPress={() => setModalVisible(false)} />
					</View>
					<FlatList
						numColumns={numberOfColumns}
						data={items}
						keyExtractor={(item) => item.value.toString()}
						renderItem={({ item }) => (
							<PickerItemComponent
								item={item}
								onPress={() => {
									onSelectItem(item);
									setModalVisible(false);
								}}
							/>
						)}
					/>
				</Screen>
			</Modal>
		</React.Fragment>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 25,
		flexDirection: 'row',
		padding: 15,
		marginVertical: 10
	},
	buttonContainer: {
		paddingHorizontal: 15
	},
	icon: {
		marginRight: 10
	},
	placeholder: {
		flex: 1,
		color: defaultStyles.colors.medium
	},
	text: {
		flex: 1
	}
});

export default AppPicker;
