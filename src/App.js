import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {AppRoutes, AuthorizationRoutes} from "./routes";
import AuthRoute from "./routes/middleware/AuthRoute";
import NonAuthRoute from "./routes/middleware/NonAuthRoute";

function App() {
    const generateAuthRouteComponent = (route, index) => {
        return <Route
            key={index}
            path={route.path}
            element={<AuthRoute
                path={route.path}
                children={route.component}
                key={index}
            />}
        />
    }
    const generateNonAuthRouteComponent = (route, index) => {
        return (
            <Route
                key={index}
                path={route.path}
                element={<NonAuthRoute
                    path={route.path}
                    children={route.component}
                    key={index}
                />}
            />)
    }
    return (
        <Routes>
            {AppRoutes.map((route, index) => {
                return generateAuthRouteComponent(route, index)
            })}
            {AuthorizationRoutes.map((route, index) => {
                return generateNonAuthRouteComponent(route, index)
            })}
        </Routes>
    );
}

export default App;
