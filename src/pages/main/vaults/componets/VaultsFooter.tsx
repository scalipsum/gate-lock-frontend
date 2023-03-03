import React, { FC } from 'react';
import TextButton from '../../../../common/components/elements/button/TextButton';
import { showError, showSuccess } from '../../../../common/helpers/showToast';
import { useLogoutMutation } from '../../../../generated/graphql';
import { useAuthContext } from '../../../auth/auth.provider';

export type VaultsFooterProps = {};

const VaultsFooter: FC<VaultsFooterProps> = () => {
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
		<div className="absolute bottom-0 left-0 right-0 flex justify-end">
			<TextButton onClick={handleLogout}>Logout</TextButton>
		</div>
	);
};

export default VaultsFooter;
