import { PetTypeModals } from '../../../utils/PageTypes';
import { useEffect, useState } from 'react';

const ProfileAdvertisementModal = ({ open, closeModal, fetchSingle, fetchSingleImages, params }) => {
	const [modalsOpened, setModalsOpened] = useState({});
	useEffect(() => {
		if (params && params.data && params.data.advertisementType && open) {
			const name = params.data.advertisementType;
			const newOpenModal = {};
			newOpenModal[name] = open;
			setModalsOpened({ ...newOpenModal });
		} else {
			setModalsOpened({});
		}
	}, [params, open]);

	return (
		<>
			{Object.keys(PetTypeModals).map((key, index) => {
				const DetailModal = PetTypeModals[key].DetailModal;
				return (
					<DetailModal
						key={index}
						open={modalsOpened[key]}
						closeModal={() => {
							if (modalsOpened[key]) {
								closeModal();
							}
						}}
						fetchSingle={PetTypeModals[key].fetchSingle}
						fetchSingleImages={PetTypeModals[key].fetchSingleImages}
						params={params} />
				);
			})}
		</>
	);
};

export default ProfileAdvertisementModal;
