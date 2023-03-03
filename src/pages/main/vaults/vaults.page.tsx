import React, { FC } from 'react';
import { AiOutlineCluster } from 'react-icons/ai';
import Button from '../../../common/components/elements/Button';
import { showError, showSuccess } from '../../../common/helpers/showToast';
import { useLogoutMutation } from '../../../generated/graphql';
import { useAuthContext } from '../../auth/auth.provider';
import VaultsHeader from './componets/VaultsHeader';

const VaultsPage: FC = () => {
	/**
	 * Handle Logout
	 */
	const { setIsLoggedIn } = useAuthContext();
	const [, logout] = useLogoutMutation();

	const handleLogout = async () => {
		const { data, error } = await logout({});
		if (data?.logout) {
			showSuccess('Logged out.');
			return setIsLoggedIn(false);
		} else showError(error?.message);
	};

	return (
		<>
			<VaultsHeader firstName="Vlad" />

			<Button onClick={handleLogout}>Logout</Button>
		</>
	);
};

export default VaultsPage;
