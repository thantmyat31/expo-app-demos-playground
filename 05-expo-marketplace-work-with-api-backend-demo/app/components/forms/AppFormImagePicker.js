import React from 'react';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

import { useFormikContext } from 'formik';

const AppFormImagePicker = ({ name }) => {
	const { setFieldValue, values, errors, touched } = useFormikContext();
	const imageUris = values[name];

	const handleAdd = (uri) => {
		setFieldValue(name, [ ...imageUris, uri ]);
	};
	const handleRemove = (uri) => {
		const remainingImages = imageUris.filter((u) => u !== uri);
		setFieldValue(name, [ ...remainingImages ]);
	};

	return (
		<React.Fragment>
			<ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
			<ErrorMessage error={errors[name]} visible={touched[name]} />
		</React.Fragment>
	);
};

export default AppFormImagePicker;
