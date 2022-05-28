import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import Text from 'src/components/styled/text/Text';
import { TextType } from 'src/components/styled/text/TextType';
import TagList from 'src/components/styled/tag/TagList';
import { useEffect, useState } from 'react';
import useToast, { ToastType } from '../../hooks/UseToast';
import UserBlock from '../../components/styled/block/UserBlock';
import PetBlock from '../../components/styled/block/PetBlock';
import PetCarousel from '../../components/image-carousel/PetCarousel';


const LostPetModal = ({ open, closeModal, fetchSingle, fetchSingleImages, params }) => {
	// latitude: 4321
	// longitude: 432
	// type: "LOST"

	const { setMessage: setError } = useToast(ToastType.ERROR);
	const [data, setData] = useState({
		description: '',
		city: '',
		createDate: '',
		header: 'Announcement',
		petInfo: {},
		userInfo: {},
		params: {},
		tags: []
	});
	const [images, setImages] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetchSingle(params.data);
				const { description, tags, city, header, createDate, userInfo } = res.data;
				const { breed, color, petType, ageFrom, ageUntil, sex } = res.data;
				const petInfo = { breed, color, petType, ageFrom, ageUntil, sex };
				setData({ description, tags, city, header, createDate, userInfo, petInfo });
			} catch (error) {
				setError(error);
				closeModal();
			}
		};

		const fetchImages = async () => {
			try {
				const res = await fetchSingleImages(params.data);
				setImages(res.data.map(value => value.content));
			} catch (error) {
				setError(error);
				closeModal();
			}
		};

		if (open && params && params.data) {
			fetchData();
			fetchImages();
		}
	}, [open, closeModal, setError, fetchSingle, params]);

	return (
		<Modal isOpen={open} toggle={closeModal} className={'big-modal'}>
			<ModalHeader>
				<Text text={data.header} type={TextType.HEADING} />
			</ModalHeader>
			<ModalBody>
				<Row className={'mrb-medium'}>
					<UserBlock data={data.userInfo} />
				</Row>
				<Row>
					<Col xl='6' lg='12' md='12' sm='12' xs='12' className='d-flex'>
						<PetCarousel data={images} />
					</Col>
					<Col xl='6' lg='12' md='12' sm='12' xs='12'>
						<Row>
							<Col xl='12' lg='12' sm='12' xs='12' className={'mrb-medium'}>
								<div className={'d-flex justify-content-between'}>
									<div className={'d-flex align-items-center'}>
										<Text text={data.city} type={TextType.SMALL} classNames={['dotted-text']}
													icon={'mdi mdi-map-marker-radius mdi-dark mdi-18px'} />
									</div>
									<div className={'d-flex align-items-center'}>
										<Text text={data.createDate} type={TextType.SMALL} icon={'mdi mdi-calendar mdi-dark mdi-18px'} />
									</div>
								</div>
								<div><Text text={data.description} type={TextType.REGULAR} stretched /></div>
							</Col>
							<Col xl='12' lg='12' sm='12' xs='12' className={'mrb-medium'}>
								<PetBlock data={data.petInfo} />
							</Col>
							<Col xl='12' lg='12' sm='12' xs='12' className='d-flex mrb-medium'>
								<TagList data={data.tags} randomizeColor={false} />
							</Col>
						</Row>

					</Col>


				</Row>

			</ModalBody>
		</Modal>
	);
};

export default LostPetModal;
