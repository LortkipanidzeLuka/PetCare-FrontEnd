import { Col, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import TestImage from 'src/assets/images/dog.jpg';
import Text from 'src/components/styled/text/Text';
import { TextType } from 'src/components/styled/text/TextType';
import TagList from 'src/components/styled/tag/TagList';


const LostPetModal = ({open, closeModal}) => {

    const data = {
        title: "Dog was api",
        description: "This staggering number is why we created Petco Love Lost, which simplifies and shortens the api pet search with just one photo of your pet. We are here for you should the unthinkable happen to a pet you love or find.",
        hashTags: ["dog", "yellow", "5 kilos", "labrador"],
        params: {
            color: "yellow",
            weight: "5 kilos",
            width: "40 cm",
            height: "30 cm",
            lastSeen: "Tbilisi, saburtalo st.pekini",
            dressing: "yes"
        }
    }

    return (
        <Modal isOpen={open} toggle={closeModal} className={"small-modal"}>
            <ModalHeader>
                Pet was lost
            </ModalHeader>
            <ModalBody>
                <Row>
                    <Col xl="6" lg="6" sm="6" xs="12" className="d-flex">
                        <img src={TestImage} alt={""} className="modal-picture"/>
                    </Col>
                    <Col xl="6" lg="6" sm="6" xs="12">
                        <div className={"d-flex justify-content-between"}>
                            <div className={"d-flex align-items-center"}>
                                <i className={"mdi mdi-map-marker-radius mdi-dark"}/>
                                <Text text={"Tbilisi, Georgia isani"} type={TextType.SMALL}
                                      classNames={["dotted-text"]}/>
                            </div>
                            <div className={"d-flex align-items-center"}>
                                <i className="mdi mdi-calendar mdi-dark"/>
                                <Text text={"11/22/2022"} type={TextType.SMALL}/>
                            </div>
                        </div>
                        <div><Text text={data.description} type={TextType.REGULAR} stretched/></div>
                    </Col>
                </Row>
                <Row className={"mrt-big"}>
                    <Col xl="6" lg="6" sm="6" xs="12">
                        <ul className={"no-padding"}>
                            {Object.keys(data.params).map((val, index) => (
                                <div className="d-flex" key={index}>
                                    <i className="mdi mdi-calendar mdi-dark"/>
                                    <div className={"mrl-small"}><Text text={data.params[`${val}`]} type={TextType.REGULAR}/></div>
                                </div>
                            ))}
                        </ul>
                    </Col>
                    <Col xl="6" lg="6" sm="6" xs="12" className="d-flex">
                        <TagList data={data.hashTags} randomizeColor={false}/>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    )
}

export default LostPetModal
