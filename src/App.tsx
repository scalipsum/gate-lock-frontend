import React, { FC } from 'react';
import Router from './Router';
import { createClient, Provider } from 'urql';
import AuthProvider from './pages/auth/auth.provider';

const App: FC = () => {
	const client = createClient({
		url: process.env.REACT_APP_API_URL ?? '',
		fetchOptions: { credentials: 'include' },
	});

	return (
		<div className="bg-gray1 min-h-screen">
			<Provider value={client}>
				<AuthProvider>
					<Router />
				</AuthProvider>
			</Provider>
		</div>
	);
};

export default App;
