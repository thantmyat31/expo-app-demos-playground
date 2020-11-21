import messageType from './message.type';

export const addMessageTypeAction = (messageDetails) => ({
	type: messageType.ADD_MESSAGE,
	payload: messageDetails
});
