import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Color from './../constants/colors.constant';
import { connect } from 'react-redux';
import UserListItemDetail from './userListItemDetail.component';

const UserListItem = ({ data, usersRole }) => {
	const [ showCase, setShowCase ] = useState(false);
	const { username, email, township, address, roleId, status } = data;
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
						data.status.network === 'online' ? (
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
						data.status.type !== 'normal' && data.status.type === 'muted' ? (
							{ ...styles.listText, ...styles.mutedTxt }
						) : (
							{ ...styles.listText }
						)
					}
					label="Status"
					value={status.type}
				/>
			</View>
		);
	};

	return (
		<View
			style={
				status.type === 'muted' ? (
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
				<View style={{ width: 60 }}>
					<Button
						title={!showCase ? 'show' : 'hide'}
						color={!showCase ? Color.primaryColor : Color.redColor}
						onPress={handleOnShowCase}
					/>
				</View>
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
