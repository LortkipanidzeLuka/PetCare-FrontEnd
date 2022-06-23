import Text from 'src/components/styled/text/Text';
import { TextType } from 'src/components/styled/text/TextType';

const Tag = (params) => {
	let text = params.text;
	if (!params.noHashTag){
		text = '#' + text;
	}
	return (
		<div style={{ backgroundColor: `${params.color} !important` ? params.color : '', ...params.style }}
				 className={`tag ${params.className ? params.className : ''}`}>
			<Text text={`${text}`} type={TextType.REGULAR} />
			{params.children}
		</div>

	);
};

export default Tag;
