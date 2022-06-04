import { PetTypeConfig } from '../../../utils/PageTypes';
import { useEffect, useState } from 'react';

const ProfileCreateModal = ({ data, open, closeModal, fetchData }) => {
	const [modalsOpened, setModalsOpened] = useState({});
	useEffect(() => {
		if (data && data.data && data.data.advertisementType && open) {
			const name = data.data.advertisementType;
			const newOpenModal = {};
			newOpenModal[name] = open;
			setModalsOpened({ ...newOpenModal });
		} else {
			setModalsOpened({});
		}
	}, [data, open]);

	return (
		<>
			{Object.keys(PetTypeConfig).map((key, index) => {
				const CreationModal = PetTypeConfig[key].CreateModal;
				return (
					<CreationModal
						key={index}
						open={modalsOpened[key]}
						closeModal={() => {
							if (modalsOpened[key]) {
								closeModal();
							}
						}}
						fetchData={fetchData}
						data={data} />
				);
			})}
		</>
	);
};

export default ProfileCreateModal;
