import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateAccountPage from './pages/auth/createAccount/createAccount.page';
import LoginPage from './pages/auth/login/login.page';
import MessagePage from './pages/auth/message/message.page';
import ErrorPage from './pages/error.page';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <h1>Hello</h1>,
		errorElement: <ErrorPage />,
	},
	// Auth
	{
		path: '/auth/',
		children: [
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'email-sent',
				element: (
					<MessagePage
						title="Email sent for approval."
						description="You'll receive an email to log in once an Admin has accepted you."
					/>
				),
			},
			{
				path: 'not-approved',
				element: (
					<MessagePage
						title="Not approved yet."
						description="Please come back later."
					/>
				),
			},
			{
				path: 'create-account',
				element: <CreateAccountPage />,
			},
		],
	},
]);

function Router() {
	return (
		<div className="bg-gray1">
			<RouterProvider router={router} />
		</div>
	);
}

export default Router;
