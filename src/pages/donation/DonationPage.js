import { useModal } from '../../hooks/UseModal';
import { PAGES } from '../../utils/PageConfig';
import useFetchTrigger from '../../hooks/UseFetchTrigger';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../storage/user/Selector';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';
import { Button } from 'reactstrap';
import AddDonation from './AddDonation';


const DonationPage = () => {
	const [, modalOpen, , toggleModal] = useModal();
	const { Grid, pageConfig } = PAGES.DONATION;
	const [updateData, fetchData] = useFetchTrigger();
	const isLoggedIn = useSelector(userSelectors.isLoggedIn);

	return (
		<div>
			<div className={'d-flex justify-content-between'}>
				<Text text={'Donation'} type={TextType.LARGE} />
				{isLoggedIn ? <Button onClick={toggleModal} className={'add-button'}>
					<Text text={'Add Advertisement'} type={TextType.MEDIUM} />
				</Button> : null}
			</div>
			<div className={'pet-card-col'}>
				<Grid {...pageConfig} updateData={updateData} className={'minus-ml-left-med'}/>
				{isLoggedIn ? <AddDonation open={modalOpen} closeModal={toggleModal} fetchSingle={pageConfig.fetchSingle}
																	 fetchData={fetchData} /> : null}
			</div>
		</div>
	);
};

export default DonationPage;
