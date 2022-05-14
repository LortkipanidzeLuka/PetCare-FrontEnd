import {TextTypeParams} from "./TextType";

const Text = ({type, text, styles, classNames}) => {
    const textParams = TextTypeParams[`${type}`]
    const textStyle = textParams && {
        fontFamily: `${textParams.fontFamily}`,
        fontSize: textParams.fontSize,
        fontWeight: textParams.fontWeight,
    }

    return (
        <div className={classNames && typeof classNames == "object"? classNames.join(" ") : ""}
             style={styles ? {...textStyle, ...styles} : {...textStyle}}>{text}</div>
    )
}

export default Text
