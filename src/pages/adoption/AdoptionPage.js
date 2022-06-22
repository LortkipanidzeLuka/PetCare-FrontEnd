import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';
import { Button } from 'reactstrap';
import { useModal } from '../../hooks/UseModal';
import { PAGES } from '../../utils/PageConfig';
import useFetchTrigger from '../../hooks/UseFetchTrigger';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../storage/user/Selector';
import AddAdoption from './AddAdoption';

const AdoptionPage = () => {
	const [, modalOpen, , toggleModal] = useModal();
	const { Grid, pageConfig } = PAGES.ADOPTION;
	const [updateData, fetchData] = useFetchTrigger();
	const isLoggedIn = useSelector(userSelectors.isLoggedIn);

	return (
		<div>
			<div className={'d-flex justify-content-between'}>
				<Text text={'Adopt and Give Away Pets'} type={TextType.LARGE} />
				{isLoggedIn ? <Button onClick={toggleModal} className={'add-button'}>
					<Text text={'Add Advertisement'} type={TextType.MEDIUM} />
				</Button> : null}
			</div>
			<Grid {...pageConfig} updateData={updateData} />
			{isLoggedIn ? <AddAdoption open={modalOpen} closeModal={toggleModal} fetchSingle={pageConfig.fetchSingle}
																fetchData={fetchData} /> : null}
		</div>
	);
};


export default AdoptionPage;
