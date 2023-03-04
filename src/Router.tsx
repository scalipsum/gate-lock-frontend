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
import ErrorPage from './pages/main/error/error.page';
import MainWrapper from './pages/main/main.wrapper';
import VaultsPage from './pages/main/vaults/vaults.page';

const Router: FC = () => {
	const { isLoggedIn, userLoading } = useAuthContext();

	const redirectHome = () => <Navigate to="/" replace />;
	const redirectAuth = () => <Navigate to="/auth/login" replace />;

	const router = createBrowserRouter([
		// Main
		{
			path: '/',
			element: userLoading ? (
				<></>
			) : !isLoggedIn ? (
				redirectAuth()
			) : (
				<MainWrapper title="All Vaults">
					<VaultsPage />
				</MainWrapper>
			),
			errorElement: isLoggedIn ? <ErrorPage /> : redirectAuth(),
		},
		// Auth
		{
			path: '/auth/',
			element: userLoading ? (
				<></>
			) : isLoggedIn ? (
				redirectHome()
			) : undefined,
			children: [
				{
					path: 'login',
					element: (
						<AuthWrapper title="Login">
							<LoginPage />
						</AuthWrapper>
					),
				},
				{
					path: 'email-sent',
					element: (
						<AuthWrapper title="Email Sent">
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
						<AuthWrapper title="Not approved">
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
						<AuthWrapper title="Create account">
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
