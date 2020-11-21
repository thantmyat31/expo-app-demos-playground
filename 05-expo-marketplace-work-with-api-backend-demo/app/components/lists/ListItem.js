import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from '../AppText';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ListItem = ({ title, subTitle, image, showChevrons, onPress, renderRightItem, IconComponent }) => {
	return (
		<Swipeable renderRightActions={renderRightItem}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}
					<View style={styles.textContainer}>
						<AppText numberOfLines={1} style={styles.title}>
							{title}
						</AppText>
						{subTitle && (
							<AppText numberOfLines={2} style={styles.subTitle}>
								{subTitle}
							</AppText>
						)}
					</View>
					{showChevrons && (
						<MaterialCommunityIcons
							style={styles.icon}
							name="chevron-right"
							size={24}
							color={colors.medium}
						/>
					)}
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 15,
		backgroundColor: colors.white
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35
	},
	textContainer: {
		marginLeft: 10,
		justifyContent: 'center',
		flex: 1
	},
	title: {
		fontWeight: '500',
		fontSize: 18
	},
	subTitle: {
		color: colors.medium
	},
	icon: { alignSelf: 'center' }
});

export default ListItem;
