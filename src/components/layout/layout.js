import Header from "../header/header";
import Footer from "../footer/footer";


const Layout = (props) => {
    return (
        <div className="main">
            <Header/>
            {props.children}
            <Footer/>
        </div>
)
}

export default Layout

