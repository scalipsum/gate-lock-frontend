import React, { FC, useState } from 'react';
import Router from './Router';
import { createClient, Provider } from 'urql';

const App: FC = () => {
	const [isLoggedIn] = useState<boolean>(true);

	const client = createClient({
		url: process.env.REACT_APP_API_URL ?? '',
		fetchOptions: { credentials: 'include' },
	});

	return (
		<div className="bg-gray1">
			<Provider value={client}>
				<Router isLoggedIn={isLoggedIn} />
			</Provider>
		</div>
	);
};

export default App;
