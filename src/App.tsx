import React, { FC } from 'react';
import Router from './Router';
import { createClient, Provider } from 'urql';
import AuthProvider from './pages/auth/auth.provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainProvider from './pages/main/main.provider';

const App: FC = () => {
	const client = createClient({
		url: process.env.REACT_APP_API_URL ?? '',
		fetchOptions: { credentials: 'include' },
		requestPolicy: 'cache-and-network',
	});

	return (
		<div className="bg-gray1 min-h-screen">
			<Provider value={client}>
				<AuthProvider>
					<MainProvider>
						<ToastContainer />
						<Router />
					</MainProvider>
				</AuthProvider>
			</Provider>
		</div>
	);
};

export default App;
