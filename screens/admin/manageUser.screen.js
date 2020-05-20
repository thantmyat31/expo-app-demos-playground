import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { userStatusToggleAction, deleteUserAction } from './../../redux/user/user.action';
import { connect } from 'react-redux';
import Color from './../../constants/colors.constant';

const ViewAndManageUserScreen = ({ navigation, userStatusToggleAction, deleteUserAction, users }) => {
	const userId = navigation.getParam('uid');
	const user = users.find((u) => u.id === userId);

	const UserDetail = ({ label, value }) => {
		return (
			<View style={styles.detail}>
				<Text style={styles.text}>{label}</Text>
				<Text style={styles.text}>{value ? value : '-'}</Text>
			</View>
		);
	};

	const handleOnDeleteUser = () => {
		Alert.alert('Are you sure!', 'Do you really want to delete this user account ?', [
			{ text: 'No', style: 'cancel' },
			{
				text: 'Yes',
				style: 'destructive',
				onPress: () => {
					deleteUserAction(user.id);
					navigation.navigate('UsersList');
				}
			}
		]);
		return;
	};
	return (
		<View style={styles.screen}>
			<ScrollView style={styles.scrollView}>
				{user && (
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
							{user.status.type.toLowerCase() === 'normal' ? (
								<TouchableOpacity
									activeOpacity={0.6}
									style={styles.btn}
									onPress={() => userStatusToggleAction(user.id, 'Muted')}
								>
									<Text style={styles.btnTxt}>Mute</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									activeOpacity={0.6}
									style={{ ...styles.btn, backgroundColor: Color.primaryColor }}
									onPress={() => userStatusToggleAction(user.id, 'Normal')}
								>
									<Text style={styles.btnTxt}>Back To Normal</Text>
								</TouchableOpacity>
							)}
							<TouchableOpacity
								activeOpacity={0.6}
								style={{ ...styles.btn, backgroundColor: Color.profileBtnColor }}
								onPress={handleOnDeleteUser}
							>
								<Text style={styles.btnTxt}>Delete</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
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
		backgroundColor: Color.mutedBgColor,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 15,
		borderRadius: 30,
		elevation: 3
	},
	btnTxt: {
		color: '#fff',
		textTransform: 'uppercase'
	}
});

const mapStateToProps = (state) => ({
	users: state.user.users
});

const mapDispatchToProps = (dispatch) => ({
	userStatusToggleAction: (uid, status) => dispatch(userStatusToggleAction(uid, status)),
	deleteUserAction: (uid) => dispatch(deleteUserAction(uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewAndManageUserScreen);
