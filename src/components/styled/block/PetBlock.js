import Text from '../text/Text';
import { TextType } from '../text/TextType';

const PetBlock = ({ data }) => {
	return (
		<div className={'d-flex full-width'}>
			<div className={'border-block colored-block full-width'}>
				<div className={'d-flex flex-column p-all-small'}>

					<div className={'d-flex flex-row justify-content-between'}>
						<Text text={'Animal: '} type={TextType.REGULAR} icon={'mdi mdi-dog mdi-dark '} />
						<Text text={data.petType} type={TextType.REGULAR} classNames={['mrl-big']} />
					</div>
					<div className={'d-flex flex-row justify-content-between'}>
						<Text text={'Breed: '} type={TextType.REGULAR} icon={'mdi mdi-dog-service'} />
						<Text text={data.breed} type={TextType.REGULAR} />
					</div>
					<div className={'d-flex flex-row justify-content-between'}>
						<Text text={'Gender: '} type={TextType.REGULAR} icon={'mdi mdi-gender-non-binary'} />
						<Text text={data.sex} type={TextType.REGULAR} />
					</div>
					<div className={'d-flex flex-row justify-content-between'}>
						<Text text={'Color: '} type={TextType.REGULAR} icon={'mdi mdi-palette'} />
						<Text text={data.color} type={TextType.REGULAR} />
					</div>
					<div className={'d-flex flex-row justify-content-between'}>
						<Text text={'Age: '} type={TextType.REGULAR} icon={'mdi mdi-calendar'} />
						<Text text={`${data.ageFrom} - ${data.ageUntil}`} type={TextType.REGULAR} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PetBlock;
