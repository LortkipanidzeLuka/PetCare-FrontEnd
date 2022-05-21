import Tag from './Tag';

const TagList = ({ data, randomizeColor }) => {

	if (randomizeColor) {
		// TODO
	}

	return (
		<div className={'tag-list'}>
			{data.map((value, index) => (
				<Tag key={index}
						 style={{
							 marginRight: '10px'
						 }} text={value} />
			))}
		</div>
	);
};

export default TagList;
