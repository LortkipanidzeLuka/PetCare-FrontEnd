import Header from "../header/Header";
import Footer from "../footer/Footer";
import SubHeader from "../header/SubHeader";


const Layout = (props) => {
    return (
        <div className="main">
            <Header/>
            <SubHeader/>
            <div className="content" style={{height:"1000px"}}>
                <div className="content-width">
                    {props.children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout

