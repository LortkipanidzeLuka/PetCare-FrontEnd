import AppHeader from "./header/AppHeader";
import AppFooter from "../shared/AppFooter";
import AppSubHeader from "./header/AppSubHeader";


const AppLayout = (props) => {
    return (
        <div className="main">
            <AppHeader/>
            <AppSubHeader/>
            <div className="content">
                <div className="content-width">
                    {props.children}
                </div>
            </div>
            <AppFooter/>
        </div>
    )
}

export default AppLayout

