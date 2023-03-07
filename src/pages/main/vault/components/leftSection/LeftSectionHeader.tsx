import React, { FC, useEffect } from 'react';
import Loading from '../../../../../common/components/elements/Loading';
import OptionalWrapper from '../../../../../common/components/elements/wrapper/OptionalWrapper';
import { showError } from '../../../../../common/helpers/showToast';
import { useGetVaultQuery } from '../../../../../generated/graphql';
import SymbolLogo from '../../../../../assets/svg/gl-logo-symbol.svg';

type LeftSectionHeaderProps = {
	vaultId: string;
};

const LeftSectionHeader: FC<LeftSectionHeaderProps> = ({ vaultId }) => {
	const [{ data, fetching: loading, error }] = useGetVaultQuery({
		variables: { input: { id: vaultId } },
	});

	useEffect(() => {
		if (error) showError(error.message);
	}, [error]);

	return (
		<OptionalWrapper
			data={loading}
			elseComponent={
				<div className="flex flex-col items-center pt-6">
					<img
						src={SymbolLogo}
						alt="Gate Lock Logo"
						className="w-36"
					/>
					<h3 className="mt-2 text-2xl" style={{ fontSize: 36 }}>
						{data?.getVault?.name} Vault
					</h3>
					<p className="text-center">Search bar</p>
				</div>
			}
		>
			<Loading className="w-12 h-12" />
		</OptionalWrapper>
	);
};

export default LeftSectionHeader;
