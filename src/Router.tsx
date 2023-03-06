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
import UserConfirmPage from './pages/auth/userConfirm/userConfirm.page';
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
								title="An email was sent!"
								description="Check your inbox for a confirmation link so you can create your account."
							/>
						</AuthWrapper>
					),
				},
				{
					path: 'not-approved',
					element: (
						<AuthWrapper title="Not approved">
							<MessagePage
								title="Not approved!"
								description="An admin is currently reviewing your application. Please come back later."
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
				{
					path: 'user-confirm/:id',
					element: (
						<AuthWrapper title="Create account">
							<UserConfirmPage />
						</AuthWrapper>
					),
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
