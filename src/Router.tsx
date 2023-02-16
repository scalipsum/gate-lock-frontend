import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { authRouter } from './pages/auth/auth.router';

function Router() {
	return (
		<div className="bg-gray1 h-screen">
			<RouterProvider router={authRouter} />
		</div>
	);
}

export default Router;
