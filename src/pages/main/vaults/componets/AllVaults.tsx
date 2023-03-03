import React, { FC, useEffect } from 'react';
import Loading from '../../../../common/components/elements/Loading';
import OptionalWrapper from '../../../../common/components/elements/wrapper/OptionalWrapper';
import { showError } from '../../../../common/helpers/showToast';
import { useGetAllVaultsQuery } from '../../../../generated/graphql';
import SingleVault from './SingleVault';

const AllVaults: FC = () => {
	const [{ data, fetching: loading, error }] = useGetAllVaultsQuery();

	useEffect(() => {
		if (error) showError(error?.message);
	}, [error]);

	return (
		<OptionalWrapper
			data={loading}
			elseComponent={
				<div className="flex flex-wrap -mx-4 mt-16">
					{data?.getAllVaults?.map((vault) => (
						<SingleVault vault={vault} key={vault.id} />
					))}
				</div>
			}
		>
			<Loading className="absolute left-0 mt-12 ml-8 m-auto w-12 h-12" />
		</OptionalWrapper>
	);
};

export default AllVaults;
