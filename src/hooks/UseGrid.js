import { useEffect, useState } from 'react';

const useGrid = ({ itemsPerPage, fetchData, params, updateData }) => {

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState([]);

	const [pages, setPages] = useState(Math.ceil(data.length / itemsPerPage));
	const [currentPage, setCurrentPage] = useState(1);

	// pagination

	function goToNextPage() {
		if (currentPage < pages) {
			setCurrentPage((page) => page + 1);
		}
	}

	function goToPreviousPage() {
		if (currentPage > 1) {
			setCurrentPage((page) => page - 1);
		}
	}

	function changePage(event) {
		const pageNumber = Number(event.target.textContent);
		setCurrentPage(pageNumber);
	}

	// fetch-data
	useEffect(() => {
		async function fetchDataFn() {
			setError(null);
			setLoading(true);
			try {
				const modifiedParams = {};
				Object.keys(params).map(value => {
					if (params[value]) {
						modifiedParams[value] = params[value];
					}
					return params[value];
				});
				const res = await fetchData({ ...modifiedParams, page: currentPage, size: itemsPerPage });
				setData(res.data.items);
				setPages(Math.ceil(res.data.totalCount / itemsPerPage));
			} catch (error) {
				setError(error);
			}
			setLoading(false);
		}

		fetchDataFn();
	}, [currentPage, params, itemsPerPage, fetchData, updateData]);

	return [data, loading, error, pages, currentPage, goToNextPage, goToPreviousPage, changePage];
};

export default useGrid;
