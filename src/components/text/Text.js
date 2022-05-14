import {TextTypeParams} from "./TextType";

const Text = ({type, text, styles, classNames, stretched}) => {
    const textParams = TextTypeParams[`${type}`]
    const textStyle = textParams && {
        fontFamily: `${textParams.fontFamily}`,
        fontSize: textParams.fontSize,
        fontWeight: textParams.fontWeight,
        textAlign: stretched ? "justify" : "initial"
    }

    return (
        <div className={classNames && typeof classNames == "object"? classNames.join(" ") : ""}
             style={styles ? {...textStyle, ...styles} : {...textStyle}}>{text}</div>
    )
}

export default Text
