import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton, AppFormPicker, AppFormImagePicker } from '../components/forms';
import CategoryPickerItem from './../components/CategoryPickerItem';

import * as Yup from 'yup';
import useLocation from '../hooks/useLocation';
import listingsApi from './../api/listings';
import UploadScreen from './upload.screen';

const items = [
	{ label: 'Furniture', value: 1, backgroundColor: '#fc5c65', icon: 'floor-lamp' },
	{ label: 'Cars', value: 2, backgroundColor: '#fd9644', icon: 'car' },
	{ label: 'Cameras', value: 3, backgroundColor: '#fed330', icon: 'camera' },
	{ label: 'Games', value: 4, backgroundColor: '#26de81', icon: 'cards' },
	{ label: 'Clothing', value: 5, backgroundColor: '#2bcbba', icon: 'shoe-heel' },
	{ label: 'Sports', value: 6, backgroundColor: '#45aaf2', icon: 'basketball' },
	{ label: 'Movies & Music', value: 7, backgroundColor: '#4b7bec', icon: 'headphones' }
];

const validationSchema = Yup.object().shape({
	title: Yup.string().required().min(1).label('Title'),
	price: Yup.number().required().min(1).max(10000).label('Price'),
	category: Yup.object().required().nullable().label('Category'),
	description: Yup.string().optional().label('Description'),
	images: Yup.array().min(1, 'Please select at least one image.')
});

const ListingEditScreen = () => {
	const [ uploadVisible, setUploadVisible ] = useState(false);
	const [ progress, setProgress ] = useState();
	const location = useLocation();

	const handleOnSubmit = async (listing, { resetForm }) => {
		setProgress(0);
		setUploadVisible(true);
		const result = await listingsApi.addListing({ ...listing, location }, (progress) => setProgress(progress));

		if (!result.ok) {
			setUploadVisible(false);
			return alert('Could not save the listing.');
		}
		resetForm();
	};

	return (
		<ScrollView>
			<Screen style={styles.screen}>
				<UploadScreen onDone={() => setUploadVisible(false)} visible={uploadVisible} progress={progress} />
				<AppForm
					initialValues={{ title: '', price: '', category: '', description: '', images: [] }}
					onSubmit={handleOnSubmit}
					validationSchema={validationSchema}
				>
					<AppFormImagePicker name="images" />
					<AppFormField
						maxLength={255}
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Title"
						name="title"
					/>
					<AppFormField
						width={120}
						maxLength={8}
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Price"
						name="price"
						keyboardType="numeric"
					/>
					<AppFormPicker
						numberOfColumns={3}
						PickerItemComponent={CategoryPickerItem}
						width="50%"
						items={items}
						placeholder="Category"
						name="category"
					/>
					<AppFormField
						maxLength={255}
						multiline
						numberOfLines={3}
						autoCapitalize="none"
						autoCorrect={false}
						placeholder="Description"
						name="description"
					/>
					<SubmitButton title="POST" />
				</AppForm>
			</Screen>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		padding: 15
	}
});

export default ListingEditScreen;
