import Tag from './Tag';
import { useEffect, useState } from 'react';
import { TagListColorPool } from '../../../utils/Constants';

const TagList = ({ data, randomizeColor, list, className }) => {
	const [colors, setColors] = useState([]);
	const [tags, setTags] = useState([]);

	const pickVisibleTags = () => {
		if (list && data && data.length) {
			let fullString = '';
			const render = [];
			for (let i = 0; i < data.length; i++) {
				fullString += data[i];
				if (fullString.length > 25) {
					break;
				}
				render.push(data[i]);
			}
			setTags(render);
		} else {
			setTags(data);
		}
	};

	const generateRandomColor = ()=> {
		if (randomizeColor && tags && tags.length) {
			let arr = [];
			for (let i = 0; i < tags.length; i++) {
				const ind = (Math.floor((Math.random() * 1000) % tags.length));
				arr.push(TagListColorPool[ind]);
			}
			setColors(arr);
		}
	}


	useEffect(() => {
		pickVisibleTags();
		generateRandomColor();
	}, [data, randomizeColor]);


	return (
		<div className={!list ? 'tag-grid' : 'tag-list'}>
			{tags && tags.map((value, index) => (
				<Tag key={index}
						 style={{
							 marginRight: '10px'
						 }} className={(colors[index] || null) + ' ' + className} text={value} />
			))}
		</div>
	);
};

export default TagList;
