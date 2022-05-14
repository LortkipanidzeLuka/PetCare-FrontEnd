import Block from "../styled/Block";
import Text from "../text/Text";
import {TextType} from "../text/TextType";
import TagList from "../styled/TagList";

const PetCardGeneric = ({imgUrl, title, description, hashTags, openModal}) => {

    return (
        <Block>
            <div className="pet-card-content" onClick={openModal}>
                <div className="card-img-wrap">
                    <img src={imgUrl}/>
                </div>
                <div className="pet-card-data">
                    <Text text={title} type={TextType.HEADING} classNames={["mr-small-vert"]}/>
                    <div style={{height: "210px"}}>
                        <Text text={description} type={TextType.REGULAR} classNames={["card-text"]}/>
                        <TagList data={hashTags} randomizeColor={false}/>
                    </div>
                    <div className="pet-card-footer">
                        <div className="pet-card-footer-left">
                            <i className="mdi mdi-calendar mdi-dark"/>
                            <Text text={"11/22/2022"} type={TextType.SMALL}/>
                        </div>
                        <div className="pet-card-footer-right">
                            <i className={"mdi mdi-map-marker-radius mdi-dark"}/>
                            <Text text={"Tbilisi, Georgia isani"} type={TextType.SMALL} classNames={["dotted-text"]}/>
                        </div>
                    </div>
                </div>
            </div>

        </Block>
    )
}

export default PetCardGeneric
