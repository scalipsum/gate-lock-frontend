import React, { FC } from 'react';
import { AiOutlineCluster } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import TextButton from '../../../../../common/components/elements/button/TextButton';
import {
	showError,
	showSuccess,
} from '../../../../../common/helpers/showToast';
import { colors } from '../../../../../common/styles/colors';
import { useLogoutMutation } from '../../../../../generated/graphql';
import { useAuthContext } from '../../../../auth/auth.provider';

type RightSectionFooterProps = {};

const RightSectionFooter: FC<RightSectionFooterProps> = () => {
	const navigate = useNavigate();

	/**
	 * Handle Log Out
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
		<div className="absolute bottom-0 left-0 right-0 pl-6 pb-6">
			<button
				className="bg-gray2 rounded-lg w-full px-4 py-2 flex items-center justify-between transform transition-all duration-500 ease-out hover:bg-gray3 cursor-pointer"
				onClick={() => navigate('/')}
			>
				<AiOutlineCluster size="52" color={colors.gray4} />
				<p className="text-center">Back To All Vaults</p>
				<div className="w-1/8" />
			</button>
			<div className="flex items-center mt-4 justify-between">
				<TextButton>Edit account</TextButton>
				<TextButton onClick={handleLogout}>Logout</TextButton>
			</div>
		</div>
	);
};

export default RightSectionFooter;
