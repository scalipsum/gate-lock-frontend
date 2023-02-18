import React, { FC } from 'react';
import Router from './Router';
import { createClient, Provider } from 'urql';
import { useQuery } from 'urql';

const App: FC = () => {
	const client = createClient({
		url: 'http://localhost:4000/graphql',
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
