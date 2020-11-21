import MESSAGES_DATA_TYPES from './../../data/messages.data';
import messageType from './message.type';

const INITIAL_STATE = {
	messages: [],
	messageTypes: MESSAGES_DATA_TYPES
};

const messageReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case messageType.ADD_MESSAGE:
			return {
				...state,
				messages: [ ...state.messages, action.payload ]
			};

		default:
			return state;
	}
};

export default messageReducer;
