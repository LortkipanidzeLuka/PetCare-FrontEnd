import { useState } from 'react';


export const useModal = (initialMode = false) => {
	const [modalOpen, setModalOpen] = useState(initialMode);
	const [modalData, setModalData] = useState({});
	const toggle = (params) => {
		if (params && params.data){
			setModalData(params)
		}
		setModalOpen(!modalOpen);
	};


	return [modalData, modalOpen, setModalOpen, toggle];
};
