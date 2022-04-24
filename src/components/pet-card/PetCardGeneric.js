import Block from "../styled/Block";
import Text from "../text/Text";
import {TextType} from "../text/TextType";
import TagList from "../styled/TagList";

const PetCardGeneric = ({imgUrl, title, description, hashTags}) => {

    return (
        <Block>
            <div className="pet-card-content">
                <div className="card-img-wrap">
                    <img src={imgUrl}/>
                </div>
                <div className="pet-card-data">
                    <Text text={title} type={TextType.HEADING} styles={{
                        margin: "10px 0"
                    }}/>
                    <div style={{height: "210px"}}>
                        <Text text={description} type={TextType.REGULAR} styles={{
                            marginBottom: "10px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "5",
                            WebkitBoxOrient: "vertical"
                        }}/>
                        <TagList data={hashTags} randomizeColor={false}/>
                    </div>
                    <div className="pet-card-footer">
                        <div className="pet-card-footer-left">
                            <i className="mdi mdi-calendar mdi-dark"/>
                            <Text text={"11/22/2022"} type={TextType.SMALL}/>
                        </div>
                        <div className="pet-card-footer-right">
                            <i className={"mdi mdi-map-marker-radius mdi-dark"}/>
                            <Text text={"Tbilisi, Georgia isani"} type={TextType.SMALL} styles={{
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow:"ellipsis"
                            }}/>
                        </div>
                    </div>
                </div>
            </div>

        </Block>
    )
}

export default PetCardGeneric
