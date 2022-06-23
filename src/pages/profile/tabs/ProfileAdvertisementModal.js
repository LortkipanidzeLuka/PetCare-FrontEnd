import { PetTypeConfig } from '../../../utils/PageTypes';
import { useEffect, useState } from 'react';

const ProfileAdvertisementModal = ({ open, closeModal, params }) => {
	const [modalsOpened, setModalsOpened] = useState({});
	useEffect(() => {
		if (params && params.data && params.data.advertisementType && open) {
			const name = params.data.advertisementType;
			const newOpenModal = {};
			newOpenModal[name] = open;
			setModalsOpened(newOpenModal);
		} else {
			setModalsOpened({});
		}
	}, [params, open]);

	return (
		<>
			{Object.keys(PetTypeConfig).map((key, index) => {
				const DetailModal = PetTypeConfig[key].DetailModal;
				return (
					<DetailModal
						key={index}
						open={modalsOpened[key]}
						closeModal={() => {
							if (modalsOpened[key]) {
								closeModal();
							}
						}}
						fetchSingle={PetTypeConfig[key].fetchSingle}
						fetchSingleImages={PetTypeConfig[key].fetchSingleImages}
						params={params} />
				);
			})}
		</>
	);
};

export default ProfileAdvertisementModal;
