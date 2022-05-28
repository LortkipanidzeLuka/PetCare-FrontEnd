import LostPetModal from '../pages/lostfound/LostPetModal';
import GenericCardSquare from '../components/item-card/GenericCardSquare';
import Api from '../services';
import GenericDataGrid from '../components/item-grid/GenericDataGrid';

export const PAGES = {
	LOSTFOUND: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: LostPetModal,
			Card: GenericCardSquare,
			fetchData: Api.Adv.fetchLostFounds,
			fetchSingle: Api.Adv.fetchSingleLostFound,
			fetchSingleImages: Api.Adv.fetchSingleLostFoundImages,
			deleteSingle: Api.Adv.deleteSingleLostFound
		}
	},
	DONATION: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: LostPetModal,
			Card: GenericCardSquare,
			fetchData: Api.Adv.fetchLostFounds,
			fetchSingle: Api.Adv.fetchSingleLostFound,
			fetchSingleImages: Api.Adv.fetchSingleLostFoundImages,
			deleteSingle: Api.Adv.deleteSingleLostFound
		}
	},
	ADOPTION: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: LostPetModal,
			Card: GenericCardSquare,
			fetchData: Api.Adv.fetchLostFounds,
			fetchSingle: Api.Adv.fetchSingleLostFound,
			fetchSingleImages: Api.Adv.fetchSingleLostFoundImages,
			deleteSingle: Api.Adv.deleteSingleLostFound
		}
	},
	CHARITY: {
		Grid: GenericDataGrid,
		pageConfig: {
			DetailModal: LostPetModal,
			Card: GenericCardSquare,
			fetchData: Api.Adv.fetchLostFounds,
			fetchSingle: Api.Adv.fetchSingleLostFound,
			fetchSingleImages: Api.Adv.fetchSingleLostFoundImages,
			deleteSingle: Api.Adv.deleteSingleLostFound
		}
	}
};
