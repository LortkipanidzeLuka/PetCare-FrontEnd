import { useState } from 'react';

const useFetchTrigger = () => {
	const [updateData, setUpdateData] = useState(false);
	const fetchData = () => {
		setUpdateData(!updateData);
	};
	return [updateData, fetchData];
};

export default useFetchTrigger;
