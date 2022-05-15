import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../src/assets/scss/app.scss';
import { createStore } from 'redux';
import rootReducer from './storage';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const configureStore = () => {
	return createStore(
		rootReducer,
	);
};
const store = configureStore();

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

