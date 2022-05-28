import Block from '../styled/block/Block';
import Text from '../styled/text/Text';
import { TextType } from '../styled/text/TextType';
import TagList from '../styled/tag/TagList';

const GenericCardSquare = ({ createDate, city, header, description, primaryImage, tags, openModal, id }) => {
		return (
			<Block>
				<div className='pet-card-content' onClick={() => openModal({ data: { id: id } })}>
					<div className='card-img-wrap'>
						<img src={primaryImage && primaryImage.content} alt={'this is card '} />
					</div>
					<div className='pet-card-data'>
						<Text text={header} type={TextType.HEADING} classNames={['mr-small-vert']} />
						<div className={'card-tags'}>
							<Text text={description} type={TextType.REGULAR} classNames={['card-text']} />
							<TagList data={tags} randomizeColor={false} />
						</div>
						<div className='pet-card-footer'>
							<div className='pet-card-footer-left'>
								<Text text={createDate} type={TextType.SMALL} icon={'mdi mdi-calendar mdi-dark mdi-18px'}/>
							</div>
							<div className='pet-card-footer-right'>
								<Text text={city} type={TextType.SMALL} classNames={['dotted-text']} icon={'mdi mdi-map-marker-radius mdi-dark mdi-18px'}/>
							</div>
						</div>
					</div>
				</div>

			</Block>
		);
	}
;

export default GenericCardSquare;
