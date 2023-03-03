import React, { FC } from 'react';
import { AiOutlineCluster } from 'react-icons/ai';
import SymbolLogo from '../../../../assets/svg/gl-logo-symbol.svg';
import Button from '../../../../common/components/elements/Button';
import { useAuthContext } from '../../../auth/auth.provider';

export type VaultsHeaderProps = {};

const VaultsHeader: FC<VaultsHeaderProps> = () => {
	const { currentUser } = useAuthContext();
	return (
		<div className="flex justify-between items-center mb-8">
			{/* Left */}
			<div>
				<img src={SymbolLogo} alt="Gate Lock Logo" className="w-40" />
				<p className="mt-2">Welcome back, {currentUser?.firstName}!</p>
			</div>

			{/* Middle */}
			<div className="flex items-center justify-center">
				<AiOutlineCluster size="52" />
				<h2 className="text-center ml-2">All Vaults</h2>
			</div>

			{/* Right */}
			<div>
				<Button>Add vault</Button>
			</div>
		</div>
	);
};

export default VaultsHeader;
