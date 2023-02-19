import React, { FC } from 'react';
import Router from './Router';
import { createClient, Provider } from 'urql';

const App: FC = () => {
	const client = createClient({
		url: process.env.REACT_APP_API_URL ?? '',
		fetchOptions: { credentials: 'include' },
	});

	return (
		<div className="bg-gray1">
			<Provider value={client}>
				<Router />
			</Provider>
		</div>
	);
};

export default App;
