import React, { FC } from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage: FC = () => {
	const error: any = useRouteError();

	return (
		<div className="h-screen flex justify-center items-center">
			<div>
				<h1>Oops!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
			</div>
		</div>
	);
};

export default ErrorPage;
