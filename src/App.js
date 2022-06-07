import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from './routes/PetCareRoutes';
import AppMiddleware from './routes/AppMiddleware';
import Leaflet from 'leaflet';

function App() {
	//MAP STUFF
	Leaflet.Icon.Default.imagePath =
		'../node_modules/leaflet';
	delete Leaflet.Icon.Default.prototype._getIconUrl;
	Leaflet.Icon.Default.mergeOptions({
		iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
		iconUrl: require('leaflet/dist/images/marker-icon.png'),
		shadowUrl: require('leaflet/dist/images/marker-shadow.png')
	});
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
