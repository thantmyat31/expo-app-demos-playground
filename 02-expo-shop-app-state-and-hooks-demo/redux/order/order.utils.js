import moment from 'moment';

export const orderDate = () => {
	const newDate = new Date();
	const dateToString = moment(newDate).format('MMMM Do YYYY, hh:mm a')
	return dateToString;
};
