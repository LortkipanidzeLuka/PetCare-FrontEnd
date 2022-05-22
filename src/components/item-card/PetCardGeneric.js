import Block from '../styled/Block';
import Text from '../text/Text';
import { TextType } from '../text/TextType';
import TagList from '../styled/TagList';

const PetCardGeneric = ({ createDate, city, title, description,primaryImage, tags, openModal }) => {
	return (
		<Block>
			<div className='pet-card-content' onClick={openModal}>
				<div className='card-img-wrap'>
					<img src={primaryImage && primaryImage.content} alt={'this is card '} />
				</div>
				<div className='pet-card-data'>
					<Text text={title} type={TextType.HEADING} classNames={['mr-small-vert']} />
					<div style={{ height: '210px' }}>
						<Text text={description} type={TextType.REGULAR} classNames={['card-text']} />
						<TagList data={tags} randomizeColor={false} />
					</div>
					<div className='pet-card-footer'>
						<div className='pet-card-footer-left'>
							<i className='mdi mdi-calendar mdi-dark' />
							<Text text={createDate} type={TextType.SMALL} />
						</div>
						<div className='pet-card-footer-right'>
							<i className={'mdi mdi-map-marker-radius mdi-dark'} />
							<Text text={city} type={TextType.SMALL} classNames={['dotted-text']} />
						</div>
					</div>
				</div>
			</div>

		</Block>
	);
};

export default PetCardGeneric;
