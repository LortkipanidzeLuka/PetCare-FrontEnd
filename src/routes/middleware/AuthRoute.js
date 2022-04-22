import React from "react"
import {withRouter} from "../helper";
import Layout from "../../components/layout/Layout";

const AuthRouteComponent = ({children: AppComponent, path}) => {
    // TODO
    // if (!localStorage.getItem("authUser")) {
    // 		return (
    // 			<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    // 		);
    // 	}

    return (
        <Layout>
            <AppComponent path={path}/>
        </Layout>
    )
}

export default (withRouter(AuthRouteComponent))
