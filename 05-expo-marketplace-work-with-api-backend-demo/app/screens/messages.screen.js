import React, { useState } from 'react';
import { FlatList } from 'react-native';

import Screen from './../components/Screen';
import ListItem from './../components/lists/ListItem';
import ListItemSeparator from './../components/lists/ListItemSeparator';
import ListItemDeleteAction from './../components/lists/ListItemDeleteAction';

const initialMessages = [
	{
		id: 'm1',
		title:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti iste ipsum labore et adipisci qui in est molestiae nihil illum blanditiis laborum obcaecati autem vel, nobis neque magnam velit maiores!',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti iste ipsum labore et adipisci qui in est molestiae nihil illum blanditiis laborum obcaecati autem vel, nobis neque magnam velit maiores!',
		image: require('./../assets/image/thant.jpg')
	},
	{
		id: 'm2',
		title: 'T2',
		description: 'D2',
		image: require('./../assets/image/thant.jpg')
	}
];

const MessagesScreen = () => {
	const [ messages, setMessages ] = useState(initialMessages);
	const [ refreshing, setRefreshing ] = useState(false);

	const handleDelete = (message) => {
		const filtered = messages.filter((m) => m.id !== message.id);
		setMessages(filtered);
	};

	return (
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={(message) => message.id}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						showChevrons
						onPress={() => console.log(item)}
						renderRightItem={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() =>
					setMessages([
						{
							id: 'm2',
							title: 'T2',
							description: 'D2',
							image: require('./../assets/image/thant.jpg')
						}
					])}
			/>
		</Screen>
	);
};

export default MessagesScreen;
