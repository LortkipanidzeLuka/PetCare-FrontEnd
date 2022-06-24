import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import Text from '../../components/styled/text/Text';
import { TextType } from '../../components/styled/text/TextType';
import ApiLoader from '../../components/styled/data/ApiLoader';
import UserBlock from '../../components/styled/block/UserBlock';
import { DonationOptionsMap } from '../../utils/Constants';
import PetCarousel from '../../components/image-carousel/PetCarousel';
import ApplicableBlock from '../../components/styled/block/ApplicableBlock';
import TagList from '../../components/styled/tag/TagList';
import ItemMap from '../../components/item-map/ItemMap';
import useToast, { ToastType } from '../../hooks/UseToast';
import { useEffect, useState } from 'react';

const DonationModal = ({ open, closeModal, fetchSingle, fetchSingleImages, params }) => {
	const { setMessage: setError } = useToast(ToastType.ERROR);
	const [dataLoading, setDataLoading] = useState(false);
	const [imagesLoading, setImagesLoading] = useState(false);

	const [data, setData] = useState({
		description: '',
		city: '',
		createDate: '',
		header: 'Advertisement',
		creatorUser: {},
		tags: [],
		applicablePetList:[],
		donationAdvertisementType:''
	});
	const [images, setImages] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetchSingle(params.data);
				const { description, tags, city, header, createDate, creatorUser } = res.data;
				const { latitude, longitude, donationAdvertisementType, applicablePetList  } = res.data;
				creatorUser['fullName'] = creatorUser['firstname'] + " " + creatorUser['lastname'];

				setData({ latitude, longitude, description, tags, city, header, createDate, creatorUser, donationAdvertisementType, applicablePetList  });
			} catch (error) {
				setError(error);
				closeModal();
			}
			setDataLoading(false);
		};

		const fetchImages = async () => {
			try {
				const res = await fetchSingleImages(params.data);
				setImages(res.data.map(value => value.content));
			} catch (error) {
				setError(error);
				closeModal();
			}
			setImagesLoading(false);
		};

		if (open && params && params.data) {
			setDataLoading(true);
			setImagesLoading(true);
			fetchData();
			fetchImages();
		}
	}, [open, closeModal, setError, fetchSingle, params, fetchSingleImages]);


	return (
		<Modal isOpen={open} toggle={closeModal} className={'big-modal'}>
			<ModalHeader>
				<Text text={data.header} type={TextType.HEADING} />
			</ModalHeader>
			<ModalBody>
				<ApiLoader loading={dataLoading || imagesLoading}>
					<Row className={'mrb-medium'}>
						<UserBlock data={{...data.creatorUser, leftData:DonationOptionsMap[data.donationAdvertisementType]}} />
					</Row>
					<Row>
						<Col xl='6' lg='12' md='12' sm='12' xs='12' className='d-flex'>
							<PetCarousel data={images} />
						</Col>
						<Col xl='6' lg='12' md='12' sm='12' xs='12'>
							<Row>
								<Col xl='12' lg='12' sm='12' xs='12' className={'mrb-medium'}>
									<ApplicableBlock data={data} />
								</Col>
								<Col xl='12' lg='12' sm='12' xs='12' className={'mrb-medium'}>
									<div className={'d-flex justify-content-between'}>
										<div className={'d-flex align-items-center'}>
											<Text text={data.city} type={TextType.SMALL} classNames={['dotted-text']}
														icon={'mdi mdi-map-marker-radius mdi-dark mdi-18px'} />
										</div>
										<div className={'d-flex align-items-center'}>
											<Text text={data.createDate} type={TextType.SMALL}
														icon={'mdi mdi-calendar mdi-dark mdi-18px'} />
										</div>
									</div>
									<div><Text text={data.description} type={TextType.REGULAR} align={'justify'} /></div>
								</Col>
								<Col xl='12' lg='12' sm='12' xs='12' className='d-flex mrb-medium'>
									<TagList data={data.tags} randomizeColor={false} list/>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row>
						<Text text={'Pet Location'} type={TextType.LARGE} />
						<ItemMap height={'300px'} latitude={data.latitude} longitude={data.longitude} />
					</Row>
				</ApiLoader>
			</ModalBody>
		</Modal>
	);
};

export default DonationModal;
