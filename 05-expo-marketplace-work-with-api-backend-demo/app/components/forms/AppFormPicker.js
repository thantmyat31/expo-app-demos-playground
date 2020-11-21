import React from 'react';

import AppPicker from './../AppPicker';
import ErrorMessage from './ErrorMessage';

import { useFormikContext } from 'formik';

const AppFormPicker = ({ name, placeholder, PickerItemComponent, items, width, numberOfColumns }) => {
	const { setFieldValue, values, errors, touched } = useFormikContext();

	return (
		<React.Fragment>
			<AppPicker
				numberOfColumns={numberOfColumns}
				PickerItemComponent={PickerItemComponent}
				items={items}
				onSelectItem={(item) => setFieldValue(name, item)}
				selectedItem={values[name]}
				placeholder={placeholder}
				width={width}
			/>
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</React.Fragment>
	);
};

export default AppFormPicker;
