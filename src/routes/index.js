import Adoption from "../pages/Adoption";
import Charity from "../pages/Charity";


const AppRoutes = [
    { path: "/", component: Adoption },
    { path: "/adoption", component: Adoption },
    { path: "/charity", component: Charity },

]


const AuthorizationRoutes = [
    { path: "/login", component: Adoption },
    { path: "/logout", component: Charity },
]


export {AppRoutes, AuthorizationRoutes}

// card damtavreba +
// responsive +
// pagination
// modal
// detail page
// services
// redux (shabat kvira)
// generic grid (later)
// generic detail page (later)




