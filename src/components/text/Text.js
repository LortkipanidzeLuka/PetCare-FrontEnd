import {TextType, TextTypeParams} from "./TextType";

const Text = ({type, text}) => {
    const textParams = TextTypeParams[`${type}`]
    return (
        <div style={{
            fontFamily: `${textParams.fontFamily}`,
            fontSize: textParams.fontSize,
            fontWeight: textParams.fontWeight
        }}>{text}</div>
    )
}

export default Text
