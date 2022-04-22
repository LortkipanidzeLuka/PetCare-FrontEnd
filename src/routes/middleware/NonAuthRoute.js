import React from "react"
import {withRouter} from "../helper";
import Layout from "../../components/layout/layout";

const NonAuthRouteComponent = ({children: AppComponent}) => {
    return (
        <Layout>
            <AppComponent/>
        </Layout>
    )
}

export default (withRouter(NonAuthRouteComponent));
