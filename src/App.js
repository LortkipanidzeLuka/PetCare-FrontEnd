import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './routes/PetCareRoutes';
import AppMiddleware from './routes/AppMiddleware';

function App() {
	const generateMiddleWareComponent = (route, index) => {
		return <Route
			key={index}
			path={route.path}
			element={<AppMiddleware
				path={route.path}
				children={route.component}
				key={index}
			/>}
		/>;
	};
	return (
		<Routes>
			{AppRoutes.map((route, index) => {
				return generateMiddleWareComponent(route, index);
			})}
		</Routes>
	);
}

export default App;
