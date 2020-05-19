import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Color from './../constants/colors.constant';

const ColorDefinition = () => {
	const ColorTone = ({ style, label }) => {
		return (
			<View style={styles.part}>
				<View style={{ ...styles.color, ...style }} />
				<Text>{label}</Text>
			</View>
		);
	};

	return (
		<View style={styles.colorTone}>
			<ColorTone label="Online" style={styles.online} />
			<ColorTone label="Offline" style={styles.offline} />
			<ColorTone label="Muted" style={styles.muted} />
		</View>
	);
};

const styles = StyleSheet.create({
	colorTone: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		marginVertical: 10
	},
	part: {
		flexDirection: 'row',
		flex: 1,
		alignItems: 'center'
	},
	color: {
		width: 30,
		height: 30,
		borderWidth: 2,
		borderColor: '#ddd',
		marginRight: 10
	},
	online: {
		backgroundColor: Color.onlineBgColor
	},
	offline: {
		backgroundColor: Color.offlineBgColor
	},
	muted: {
		backgroundColor: Color.mutedBgColor
	}
});

export default ColorDefinition;
