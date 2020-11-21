import React from 'react';
import { StyleSheet, Modal, View } from 'react-native';

import colors from '../config/colors';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

const UploadScreen = ({ onDone, progress = 0, visible }) => {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				{progress < 1 ? (
					<Progress.Bar progress={progress} width={200} color={colors.primary} />
				) : (
					<LottieView
						onAnimationFinish={onDone}
						source={require('./../assets/animations/done.json')}
						autoPlay
						loop={false}
						style={styles.animation}
					/>
				)}
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	animation: {
		width: 150
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default UploadScreen;
