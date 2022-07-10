import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '../src/assets/scss/app.scss';
import { createStore } from 'redux';
import rootReducer from './storage';
import { Provider } from 'react-redux';
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
			<MessengerCustomerChat
				pageId="108539998574817"
				appId="1767431093432033"
			/>
		</BrowserRouter>
	</Provider>
);

