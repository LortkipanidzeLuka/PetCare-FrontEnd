import { useState } from 'react';

const usePagination = ({ data,itemsPerPage }) => {

	const [pages] = useState(Math.ceil(data.length/itemsPerPage));
	const [currentPage, setCurrentPage] = useState(1);
	function goToNextPage() {
		console.log("next")
		if (currentPage < pages) {
			setCurrentPage((page) => page + 1);
		}
	}
	function goToPreviousPage() {
		console.log("previous")
		if (currentPage > 0){
			setCurrentPage((page) => page - 1);
		}
	}

	function changePage(event) {
		console.log(event)
		const pageNumber = Number(event.target.textContent);
		setCurrentPage(pageNumber);
	}

	return [pages, currentPage, goToNextPage, goToPreviousPage, changePage]
};

export default usePagination
