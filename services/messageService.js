import Message from '../models/Message';

export const getAllMessages = () => {
	return new Promise((resolve, reject) => {
		Message.find().exec((allMessagesError, messages) => {
			if (!allMessagesError) {
				resolve(messages);
			} else {
				reject(allMessagesError);
			}
		});
	});
}

export const createMessage = (messageData) => {
	return new Promise((resolve, reject) => {
		const message = new Message(messageData);
		message.save((saveError, newMessage) => {
			if (!saveError) {
				resolve(newMessage);
			} else {
				reject(saveError);
			}
		})
	});
}