import React, { FC } from 'react';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import AuthContainer from './pages/auth/auth.container';
import CreateAccountPage from './pages/auth/createAccount/createAccount.page';
import LoginPage from './pages/auth/login/login.page';
import MessagePage from './pages/auth/message/message.page';
import ErrorPage from './pages/error.page';

type RouterProps = {
	isLoggedIn: boolean;
};

const Router: FC<RouterProps> = ({ isLoggedIn }) => {
	const redirectHome = () => <Navigate to="/" replace />;
	const redirectAuth = () => <Navigate to="/auth/login" replace />;

	const router = createBrowserRouter([
		{
			path: '/',
			element: isLoggedIn ? <h1>Hello</h1> : redirectAuth(),
			errorElement: isLoggedIn ? <ErrorPage /> : redirectAuth(),
		},
		// Auth
		{
			path: '/auth/',
			element: isLoggedIn ? redirectHome() : undefined,
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
					path: 'account-sent',
					element: (
						<AuthContainer>
							<MessagePage
								title="Not approved by an admin yet."
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

	return <RouterProvider router={router} />;
};

export default Router;
