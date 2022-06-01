import React from 'react';
import Block from '../../../components/styled/block/Block';
import LostPetModal from '../../lostfound/LostPetModal';
import Api from '../../../services';
import AddLostPet from '../../lostfound/AddLostPet';
import { useModal } from '../../../hooks/UseModal';
import GenericDataList from '../../../components/item-collection/data-components/GenericDataList';
import GenericCardRectangle from '../../../components/item-card/GenericCardRectangle';

const ProfileAdvertisementTab = () => {
	const [,modalOpen, , toggleModal] = useModal();

	return (
		<Block className={'full-tab'}>
			<GenericDataList
				searchConfig={[]}
				DetailModal={LostPetModal}
				Card={GenericCardRectangle}
				fetchData={Api.Prof.advertisements}
				fetchSingle={Api.Lost.fetchSingleLostFound}
				fetchSingleImages={Api.Lost.fetchSingleLostFoundImages}
				paging={false}
			/>
			<AddLostPet open={modalOpen} closeModal={toggleModal} />

		</Block>
	);
};

export default ProfileAdvertisementTab;
