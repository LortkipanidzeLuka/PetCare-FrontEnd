import Text from 'src/components/styled/text/Text';
import { TextType } from 'src/components/styled/text/TextType';

const Tag = (params) => {
    return (
        <div style={{backgroundColor: `${params.color} !important` ? params.color : "", ...params.style}} className={"tag"}>
            <Text text={`#${params.text}`} type={TextType.REGULAR}/>
            {params.children}
        </div>

    )
}

export default Tag
