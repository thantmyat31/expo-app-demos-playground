import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

const ViewAndManageUserScreen = ({ navigation }) => {
	const user = navigation.getParam('user');
	const UserDetail = ({ label, value }) => {
		return (
			<View style={styles.detail}>
				<Text style={styles.text}>{label}</Text>
				<Text style={styles.text}>{value ? value : '-'}</Text>
			</View>
		);
	};
	return (
		<View style={styles.screen}>
			<ScrollView style={styles.scrollView}>
				<View>
					<View style={styles.detailsList}>
						<UserDetail label="Username" value={user.username} />
						<UserDetail label="Email" value={user.email} />
						<UserDetail label="Township" value={user.township} />
						<UserDetail label="Address" value={user.address} />
						<UserDetail label="Role" value={user.role} />
						<UserDetail label="Network" value={user.status.network} />
						<UserDetail label="Status" value={user.status.type} />
						<UserDetail
							label="Favorite Posts"
							value={user.favoritePosts ? user.favoritePosts.length : ''}
						/>
					</View>
					<View style={styles.btnGroup}>
						<TouchableOpacity activeOpacity={0.6} style={styles.btn}>
							<Text style={styles.btnTxt}>Muted</Text>
						</TouchableOpacity>

						<TouchableOpacity activeOpacity={0.6} style={styles.btn}>
							<Text style={styles.btnTxt}>Delete</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	scrollView: {
		padding: 20
	},
	detailsList: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: '#ddd',
		borderRadius: 15
	},
	detail: {
		flexDirection: 'row',
		paddingVertical: 10,
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	text: {
		fontSize: 16,
		color: '#555'
	},
	btnGroup: {
		marginVertical: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	btn: {
		width: '47%',
		backgroundColor: '#555',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 15,
		borderRadius: 30
	},
	btnTxt: {
		color: '#fff',
		textTransform: 'uppercase'
	}
});

export default ViewAndManageUserScreen;
