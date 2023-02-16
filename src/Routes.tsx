import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import EmailPage from './pages/auth/email/email.page';
import { RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/error.page';
import MessagePage from './pages/auth/message/message.page';
import CreateAccountPage from './pages/auth/createAccount/createAccount.page';

const authRouter = createBrowserRouter([
	{
		path: '/',
		element: <EmailPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/auth/email-sent',
		element: (
			<MessagePage
				title="Email sent for approval."
				description="You'll receive an email to log in once an Admin has accepted you."
			/>
		),
	},
	{
		path: '/auth/not-approved',
		element: (
			<MessagePage
				title="Not approved yet."
				description="Please come back later."
			/>
		),
	},
	{
		path: '/auth/create-account',
		element: <CreateAccountPage />,
	},
]);

function Routes() {
	return (
		// App Container
		<div className="bg-gray1 h-screen">
			<RouterProvider router={authRouter} />
		</div>
	);
}

export default Routes;
