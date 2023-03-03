import React, { FC } from 'react';
import { AiOutlineCluster } from 'react-icons/ai';
import SymbolLogo from '../../../../assets/svg/gl-logo-symbol.svg';
import Button from '../../../../common/components/elements/button';
import OptionalWrapper from '../../../../common/components/elements/wrapper/OptionalWrapper';
import { useMeQuery } from '../../../../generated/graphql';

export type VaultsHeaderProps = {};

const VaultsHeader: FC<VaultsHeaderProps> = () => {
	const [{ data }] = useMeQuery();

	return (
		<div className="flex justify-between items-center mb-8 pt-8">
			{/* Left */}
			<div>
				<img src={SymbolLogo} alt="Gate Lock Logo" className="w-36" />
				<OptionalWrapper data={data}>
					<p className="mt-3">Welcome back, {data?.me?.firstName}!</p>
				</OptionalWrapper>
			</div>

			{/* Middle */}
			<div className="flex items-center justify-center -mt-6">
				<AiOutlineCluster size="52" />
				<h2 className="text-center ml-2">All Vaults</h2>
			</div>

			{/* Right */}
			<div className="-mt-6">
				<Button>Add vault</Button>
			</div>
		</div>
	);
};

export default VaultsHeader;
