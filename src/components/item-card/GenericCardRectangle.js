import Text from '../styled/text/Text';
import { TextType } from '../styled/text/TextType';
import TagList from '../styled/tag/TagList';
import Block from '../styled/block/Block';
import { Row } from 'reactstrap';
import Tag from '../styled/tag/Tag';

const GenericCardRectangle = (params) => {
	const {
		createDate,
		city,
		header,
		description,
		primaryImage,
		tags,
		openModal,
		id,
		advertisementType,
		userInfo,
		cardConfig
	} = params;

	return (
		<Block bigBorder noShadow className={'auto-width white-card'}>
			<div className='pet-card-rectangle'>
				<div className={'pet-card-rectangle-main d-flex'}>
					<div className='card-img-wrap'
							 onClick={() => openModal({ data: { id: id, advertisementType: advertisementType } })}>
						<img src={primaryImage && primaryImage.content} alt={'this is card '} />
					</div>
					<div className={'pet-card-content-wrap'}>
						<Row>
							<Row className={'no-padding'}>
								<div className={'d-flex justify-content-between '}>
									<div className={'d-flex flex-column'}>
										<Text text={header} align={'left'} type={TextType.EXTRA_LARGE}
													classNames={['mrr-medium one-line-text']} />
										<Text text={createDate} type={TextType.REGULAR} icon={'mdi mdi-calendar mdi-18px'}
													classNames={['faint-text']} />
									</div>
									{(!cardConfig || !cardConfig.noActions) && <div className={'d-flex flex-row'}>
										{cardConfig.actions.map((val, idx) => {
											if (val.display(params)) {
												const iconAction = cardConfig.actionMethods[val.name];
												return (
													<div key={idx} className={`card-action-icon ${val.divClassName} mrr-small`} onClick={() => {
														iconAction({ data: { params } });
													}}>
														<i className={`mdi mdi-dark ${val.icon} mdi-24px ${val.divClassName}`} />
													</div>
												);
											}else {
												return (<></>)
											}
										})}
									</div>}
									{cardConfig && cardConfig.topChip &&
										<div>
											<Tag style={{ minWidth: '100px' }} text={cardConfig.getTitle(params[cardConfig.chipValueField])}
													 noHashTag={true} color={cardConfig.getColor(params[cardConfig.chipValueField])} />
										</div>}
								</div>
							</Row>

							<Row className={'mrt-medium d-flex flex-row no-padding'}>
								<Text text={description} type={TextType.MEDIUM} classNames={['five-line-text']} />
							</Row>
						</Row>
						<Row className={'mrt-medium no-padding'}>
							<div className={'d-flex no-padding'}>
								<Text text={city} type={TextType.MEDIUM} icon={'mdi mdi-map-marker-radius mdi-dark mdi-18px'}
											classNames={['faint-text mrr-medium']} />
								{userInfo && userInfo.fullName &&
									<Text text={userInfo.fullName} type={TextType.MEDIUM}
												icon={'mdi mdi-account mdi-dark mdi-18px'}
												classNames={['faint-text one-line-text']} />
								}
							</div>
						</Row>
					</div>
				</div>
				<div className={'card-tags'}>
					<TagList data={tags} list className={'big-tags'} />
				</div>
			</div>
		</Block>
	);
};

export default GenericCardRectangle;
