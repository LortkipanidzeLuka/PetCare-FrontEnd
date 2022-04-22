import Text from "../text/Text";
import {TextType} from "../text/TextType";

const SubHeader = () => {
    return (
        <div className="subheader">
            <ol className="subheader-list content-width">
                <li>
                    <Text type={TextType.HEADER_TAB} text={"Lost"}/>
                </li>

                <li>
                    <Text type={TextType.HEADER_TAB} text={"Found"}/>
                </li>
                <li>
                    <Text type={TextType.HEADER_TAB} text={"Pet Care"}/>
                </li>
                <li>
                    <Text type={TextType.HEADER_TAB} text={"Adoption"}/>
                </li>
            </ol>
        </div>
    )
}

export default SubHeader
