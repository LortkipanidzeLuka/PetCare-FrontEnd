import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import TestImage from 'src/assets/images/dog.jpg';
import Text from 'src/components/styled/text/Text';
import { TextType } from 'src/components/styled/text/TextType';
import TagList from 'src/components/styled/tag/TagList';
import { useEffect, useState } from 'react';
import useToast, { ToastType } from '../../hooks/UseToast';
import UserBlock from '../../components/styled/block/UserBlock';
import PetBlock from '../../components/styled/block/PetBlock';


const LostPetModal = ({ open, closeModal, fetchSingle, params }) => {
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
	useEffect(() => {
		const fetch = async () => {
			try {
				const res = await fetchSingle(params.data);
				const {
					description,
					tags,
					city,
					header,
					createDate,
					petType,
					color,
					breed,
					ageFrom,
					ageUntil,
					userInfo,
					sex
				} = res.data;
				setData({
					description,
					tags,
					city,
					header,
					createDate,
					userInfo,
					petInfo: { breed, color, petType, ageFrom, ageUntil, sex }
				});
			} catch (error) {
				setError(error);
				closeModal();
			}
		};
		if (open && params && params.data) {
			fetch();
		}
	}, [open, closeModal, setError, fetchSingle, params]);

	return (
		<Modal isOpen={open} toggle={closeModal} className={'small-modal'}>
			<ModalHeader>
				<Text text={data.header} type={TextType.HEADING} />
			</ModalHeader>
			<ModalBody>
				<Row className={'mrb-medium'}>
					<UserBlock data={data.userInfo} />
				</Row>
				<Row>
					<Col xl='6' lg='6' sm='6' xs='12' className='d-flex'>
						<img src={TestImage} alt={''} className='modal-picture' />
					</Col>
					<Col xl='6' lg='6' sm='6' xs='12'>
						<div className={'d-flex justify-content-between'}>
							<div className={'d-flex align-items-center'}>
								<Text text={data.city} type={TextType.SMALL} classNames={['dotted-text']} icon={'mdi mdi-map-marker-radius mdi-dark mdi-18px'}/>
							</div>
							<div className={'d-flex align-items-center'}>
								<Text text={data.createDate} type={TextType.SMALL} icon={'mdi mdi-calendar mdi-dark mdi-18px'}/>
							</div>
						</div>
						<div><Text text={data.description} type={TextType.REGULAR} stretched /></div>
					</Col>
				</Row>
				<Row className={'mrt-big'}>
					<Col xl='6' lg='6' sm='6' xs='12'>
						<PetBlock data={data.petInfo}/>
					</Col>
					<Col xl='6' lg='6' sm='6' xs='12' className='d-flex'>
						<TagList data={data.tags} randomizeColor={false} />
					</Col>
				</Row>
			</ModalBody>
		</Modal>
	);
};

export default LostPetModal;
