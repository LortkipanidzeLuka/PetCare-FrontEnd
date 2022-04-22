import React from "react"
import {withRouter} from "../helper";
import Layout from "../../components/layout/Layout";

const NonAuthRouteComponent = ({children: AppComponent}) => {
    return (
        <Layout>
            <AppComponent/>
        </Layout>
    )
}

export default (withRouter(NonAuthRouteComponent));
