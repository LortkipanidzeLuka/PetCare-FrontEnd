import { Col, Row } from 'reactstrap';
import { useModal } from '../../hooks/UseModal';
import GenericDataPagination from './GenericDataPagination';
import useGrid from '../../hooks/UseGrid';
import { useEffect, useState } from 'react';
import useToast, { ToastType } from '../../hooks/UseToast';
import FormInput from '../form/FormInput';
import { SelectFormInput } from '../form/SelectFormInput';
import { City, PetColor, PetSex, PetTypes } from '../../utils/Constants';
import { TextFormInput } from '../form/TextFormInput';
import { useForm } from 'react-hook-form';
import Block from '../styled/block/Block';

const GenericDataGrid = ({ DetailModal, Card, fetchData, fetchSingle, fetchSingleImages }) => {
	const [modalData, petModalOpen, , toggleModal] = useModal();
	const [params] = useState({});
	const [data, loading, error, pages, currentPage, goToNextPage, goToPreviousPage, changePage] = useGrid({
		itemsPerPage: 10, params: params, fetchData: fetchData
	});
	const { setMessage } = useToast(ToastType.ERROR);

	const { register: createAdv, handleSubmit, formState: { errors } } = useForm({ shouldUseNativeValidation: true });
	useEffect(() => {
		setMessage(error);
	}, [error, setMessage]);

	const DefaultFormConfig = {
		lg: '12', xl: '12', sm: '12', xs: '12', errors: errors, register: createAdv
	};

	const FormConfig = [
		[{
			...DefaultFormConfig,
			name: 'city',
			heading: 'City',
			placeholder: 'Please enter city',
			component: SelectFormInput,
			options: City
		}, {
			...DefaultFormConfig,
			name: 'header',
			heading: 'Header',
			placeholder: 'Please enter header',
			requiredMessage: 'Header is required',
			component: TextFormInput
		}, {
			...DefaultFormConfig,
			name: 'petType',
			heading: 'Pet Type',
			placeholder: 'Please pet type',
			component: SelectFormInput,
			options: PetTypes
		}, {
			...DefaultFormConfig,
			name: 'sex',
			heading: 'Gender',
			placeholder: 'Please enter genrder',
			component: SelectFormInput,
			options: PetSex
		}, {
			...DefaultFormConfig,
			name: 'color',
			heading: 'Pet Color',
			placeholder: 'Please enter pet color',
			component: SelectFormInput,
			options: PetColor
		}, {
			...DefaultFormConfig,
			name: 'breed',
			heading: 'Breed',
			placeholder: 'Please enter breed',
			component: TextFormInput
		}]
	];
	const onSubmit = async (data) => {
		console.log(data);
	};
	return (<div>
		{loading ? (
			<div>
				loading TODO
			</div>) : (
			<Row>
				<Col xl={'3'}>
					<Row>
						<Col className={'pet-card-col'}>
							<Block noShadow>
								<div>
									<form style={{ padding: '10px' }} onSubmit={handleSubmit(onSubmit)}>
										<FormInput FormConfig={FormConfig} buttonName={'Register'} />
									</form>
								</div>
							</Block>
						</Col>
					</Row>
				</Col>
				<Col xl={'9'}>
					<Row>
						{data.map((value, index) => (<Col className='pet-card-col' xl='4' lg='6' sm='6' xs='12' key={index}>
							<Card
								openModal={toggleModal}
								{...value} />
						</Col>))}
					</Row>
					<GenericDataPagination
						pages={pages}
						page={currentPage}
						goToNextPage={goToNextPage}
						goToPreviousPage={goToPreviousPage}
						changePage={changePage}
					/>
				</Col>

				<DetailModal open={petModalOpen} closeModal={toggleModal} fetchSingle={fetchSingle} params={modalData}
										 fetchSingleImages={fetchSingleImages} />
			</Row>)}
	</div>);
};

export default GenericDataGrid;
