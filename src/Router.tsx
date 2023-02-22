import React, { FC } from 'react';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import { useAuthContext } from './pages/auth/auth.provider';
import AuthWrapper from './pages/auth/auth.wrapper';
import CreateAccountPage from './pages/auth/createAccount/createAccount.page';
import LoginPage from './pages/auth/login/login.page';
import MessagePage from './pages/auth/message/message.page';
import ErrorPage from './pages/error.page';
import HomePage from './pages/main/home/home.page';
import MainWrapper from './pages/main/main.wrapper';

const Router: FC = () => {
	const { isLoggedIn } = useAuthContext();

	const redirectHome = () => <Navigate to="/" replace />;
	const redirectAuth = () => <Navigate to="/auth/login" replace />;

	const router = createBrowserRouter([
		{
			path: '/',
			element: isLoggedIn ? (
				<MainWrapper>
					<HomePage />
				</MainWrapper>
			) : (
				redirectAuth()
			),
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
						<AuthWrapper>
							<LoginPage />
						</AuthWrapper>
					),
				},
				{
					path: 'email-sent',
					element: (
						<AuthWrapper>
							<MessagePage
								title="Email sent for approval."
								description="You'll receive an email to log in once an Admin has accepted you."
							/>
						</AuthWrapper>
					),
				},
				{
					path: 'account-sent',
					element: (
						<AuthWrapper>
							<MessagePage
								title="Not approved by an admin yet."
								description="Please come back later."
							/>
						</AuthWrapper>
					),
				},
				{
					path: 'create-account',
					element: (
						<AuthWrapper>
							<CreateAccountPage />
						</AuthWrapper>
					),
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
