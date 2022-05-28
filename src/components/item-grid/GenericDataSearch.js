import { Col, Row } from 'reactstrap';
import Block from '../styled/block/Block';
import FormInput from '../form/FormInput';
import { useForm } from 'react-hook-form';

const GenericDataSearch = ({ searchConfig }) => {

	const { register: createAdv, handleSubmit, formState: { errors }, setValue } = useForm({ shouldUseNativeValidation: true });
	const FormConfig = searchConfig.map(val => (val.map(innerVal => ({
		...innerVal,
		errors: errors,
		register: createAdv,
		setValue: setValue
	}))));

	const onSubmit = async (data) => {
		console.log(data);
	};

	return (
		<Row>
			<Col className={'pet-card-col'}>
				<Block noShadow>
					<div>
						<form style={{ padding: '10px' }} onSubmit={handleSubmit(onSubmit)}>
							<FormInput FormConfig={FormConfig} buttonName={'Register'} fullButton />
						</form>
					</div>
				</Block>
			</Col>
		</Row>
	);
};

export default GenericDataSearch;
