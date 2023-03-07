import React, { FC, useEffect } from 'react';
import { showError } from '../../../common/helpers/showToast';
import { useGetAllVaultsQuery } from '../../../generated/graphql';
import AllVaults from './componets/AllVaults';
import VaultsFooter from './componets/VaultsFooter';
import VaultsHeader from './componets/VaultsHeader';

const VaultsPage: FC = () => {
	const [{ data, fetching: loading, error }, refetchVaults] =
		useGetAllVaultsQuery();

	useEffect(() => {
		if (error) showError(error?.message);
	}, [error]);

	return (
		<div className="relative h-full">
			<VaultsHeader refetchVaults={refetchVaults} />
			<AllVaults
				data={data}
				loading={loading}
				refetchVaults={refetchVaults}
			/>
			<VaultsFooter />
		</div>
	);
};

export default VaultsPage;
