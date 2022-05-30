import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import qs from 'query-string';

const useQueryParams = (name) => {
	const [param, setParam] = useState('');
	const { search } = useLocation();

	useEffect(() => {
		const data = qs.parse(search);

		if (data && data[name]) {
			setParam(data[name].toString());
		}

	}, [search, setParam, name]);

	return { param };
};

export default useQueryParams;
