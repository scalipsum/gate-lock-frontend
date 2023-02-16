import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../error.page';
import CreateAccountPage from './createAccount/createAccount.page';
import EmailPage from './email/email.page';
import MessagePage from './message/message.page';

export const authRouter = createBrowserRouter([
	{
		path: '/auth/login',
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
