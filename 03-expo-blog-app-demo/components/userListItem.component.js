import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Color from './../constants/colors.constant';
import { connect } from 'react-redux';
import UserListItemDetail from './userListItemDetail.component';

const UserListItem = ({ data, usersRole, navigation }) => {
	const [ showCase, setShowCase ] = useState(false);
	const { id, username, email, township, address, roleId, status } = data;
	const userRole = usersRole.find((r) => r.id === roleId);

	const handleOnShowCase = () => {
		setShowCase(!showCase);
	};

	const DetailsCard = () => {
		return (
			<View style={styles.details}>
				<UserListItemDetail label="Email" value={email} />
				<UserListItemDetail label="Township" value={township} />
				<UserListItemDetail label="Address" value={address} />
				<UserListItemDetail label="Role" value={userRole.role} />
				<UserListItemDetail
					nstyle={
						status.network === 'online' ? (
							{ ...styles.listText, ...styles.onlineTxt }
						) : (
							{ ...styles.listText }
						)
					}
					label="Network"
					value={status.network}
				/>
				<UserListItemDetail
					nstyle={
						status.type.toLowerCase() !== 'normal' && status.type.toLowerCase() === 'muted' ? (
							{ ...styles.listText, ...styles.mutedTxt }
						) : (
							{ ...styles.listText }
						)
					}
					label="Status"
					value={status.type}
				/>
				{userRole.role !== 'adminSuperMaster' ? (
					<View style={styles.viewBtnContainer}>
						<TouchableOpacity
							activeOpacity={0.6}
							style={styles.viewBtn}
							onPress={() =>
								navigation.navigate({
									routeName: 'ViewAndManage',
									params: { uid: id }
								})}
						>
							<Text style={styles.viewBtnTxt}>View and Manage</Text>
						</TouchableOpacity>
					</View>
				) : null}
			</View>
		);
	};

	return (
		<View
			style={
				status.type.toLowerCase() === 'muted' ? (
					{ ...styles.listItem, ...styles.muted }
				) : status.network === 'online' ? (
					{ ...styles.listItem, ...styles.online }
				) : (
					{ ...styles.listItem }
				)
			}
		>
			<View style={styles.item}>
				<Text style={styles.username}>{username}</Text>
				<TouchableOpacity
					activeOpacity={0.6}
					style={
						!showCase ? (
							styles.showDetailsBtn
						) : (
							{ ...styles.showDetailsBtn, backgroundColor: Color.redColor }
						)
					}
					onPress={handleOnShowCase}
				>
					<Text style={styles.btnTxt}>{!showCase ? 'show' : 'hide'}</Text>
				</TouchableOpacity>
			</View>
			{showCase ? <DetailsCard /> : null}
		</View>
	);
};

const styles = StyleSheet.create({
	listItem: {
		elevation: 2,
		backgroundColor: '#fff',
		paddingHorizontal: 10,
		paddingVertical: 15,
		marginBottom: 15,
		borderRadius: 10
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	username: {
		fontSize: 16,
		color: '#555'
	},
	showDetailsBtn: {
		width: 80,
		backgroundColor: Color.primaryColor,
		paddingHorizontal: 10,
		paddingVertical: 8,
		elevation: 2,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 20
	},
	btnTxt: {
		color: '#fff',
		textTransform: 'uppercase'
	},
	viewBtnContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20
	},
	viewBtn: {
		backgroundColor: Color.primaryColor,
		paddingHorizontal: 15,
		paddingVertical: 8,
		borderRadius: 20
	},
	viewBtnTxt: {
		color: '#fff',
		textTransform: 'uppercase'
	},
	list: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 5,
		paddingHorizontal: 20
	},
	listText: {
		fontSize: 14,
		color: '#555'
	},
	online: {
		backgroundColor: Color.onlineBgColor
	},
	onlineTxt: {
		color: Color.onlineTxtColor
	},
	muted: {
		backgroundColor: Color.mutedBgColor
	},
	mutedTxt: {
		color: Color.mutedTxtColor
	}
});

const mapStateToProps = (state) => ({
	usersRole: state.user.usersRole
});

export default connect(mapStateToProps)(UserListItem);
