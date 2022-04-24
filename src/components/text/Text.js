import {TextTypeParams} from "./TextType";

const Text = ({type, text, styles}) => {
    const textParams = TextTypeParams[`${type}`]
    const textStyle = textParams && {
        fontFamily: `${textParams.fontFamily}`,
        fontSize: textParams.fontSize,
        fontWeight: textParams.fontWeight,
    }

    return (
        <div style={styles ? {...textStyle, ...styles} : {...textStyle}}>{text}</div>
    )
}

export default Text
