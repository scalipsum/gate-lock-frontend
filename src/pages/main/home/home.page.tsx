import React, { FC } from 'react';
import Button from '../../../common/components/elements/Button';
import { useLogoutMutation } from '../../../generated/graphql';
import { useAuthContext } from '../../auth/auth.provider';

const HomePage: FC = () => {
	/**
	 * Handle Logout
	 */
	const { setIsLoggedIn } = useAuthContext();
	const [, logout] = useLogoutMutation();

	const handleLogout = async () => {
		const { data, error } = await logout({});
		if (data?.logout) return setIsLoggedIn(false);
		else return console.log(error);
	};

	return (
		<div className="px-8 py-4">
			<h1>Home Page</h1>
			<Button onClick={handleLogout}>Logout</Button>
		</div>
	);
};

export default HomePage;
