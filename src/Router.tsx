import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthContainer from './pages/auth/auth.container';
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
				element: (
					<AuthContainer>
						<LoginPage />
					</AuthContainer>
				),
			},
			{
				path: 'email-sent',
				element: (
					<AuthContainer>
						<MessagePage
							title="Email sent for approval."
							description="You'll receive an email to log in once an Admin has accepted you."
						/>
					</AuthContainer>
				),
			},
			{
				path: 'not-approved',
				element: (
					<AuthContainer>
						<MessagePage
							title="Not approved yet."
							description="Please come back later."
						/>
					</AuthContainer>
				),
			},
			{
				path: 'create-account',
				element: (
					<AuthContainer>
						<CreateAccountPage />,
					</AuthContainer>
				),
			},
		],
	},
]);

const Router: FC = () => {
	return <RouterProvider router={router} />;
};

export default Router;
