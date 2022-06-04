import AddLostPet from './AddLostPet';
import { useModal } from '../../hooks/UseModal';
import { Button } from 'reactstrap';
import { PAGES } from '../../utils/PageConfig';
import useFetchTrigger from '../../hooks/UseFetchTrigger';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';

const LostPetPage = () => {
	const [, modalOpen, , toggleModal] = useModal();
	const { Grid, pageConfig } = PAGES.LOST_FOUND;
	const [updateData, fetchData] = useFetchTrigger();

	return (
		<div>
			<div className={'d-flex justify-content-between'}>
				<Text text={'Lost And Found Pets'} type={TextType.LARGE}/>
				<Button onClick={toggleModal} className={'add-button'}>
					<Text text={'Add announcement'} type={TextType.MEDIUM} />
				</Button>
			</div>
			<Grid {...pageConfig} updateData={updateData} />
			<AddLostPet open={modalOpen} closeModal={toggleModal} fetchSingle={pageConfig.fetchSingle}
									fetchData={fetchData} />
		</div>
	);
};

export default LostPetPage;
