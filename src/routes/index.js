import Adoption from "../pages/test-page";
import Charity from "../pages/test-page-2";


const AppRoutes = [

    { path: "/adoption", component: Adoption },
    { path: "/charity", component: Charity },

]


const AuthorizationRoutes = [
    { path: "/login", component: Adoption },
    { path: "/logout", component: Charity },
]


export {AppRoutes, AuthorizationRoutes}
