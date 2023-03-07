import React, { FC } from 'react';
import { OperationContext } from 'urql';
import Loading from '../../../../common/components/elements/Loading';
import OptionalWrapper from '../../../../common/components/elements/wrapper/OptionalWrapper';
import { GetAllVaultsQuery } from '../../../../generated/graphql';
import SingleVault from './SingleVault';

type AllVaultsProps = {
	loading: Boolean;
	data: GetAllVaultsQuery | undefined;
	refetchVaults: (opts?: Partial<OperationContext> | undefined) => void;
};

const AllVaults: FC<AllVaultsProps> = ({ data, loading, refetchVaults }) => {
	const allVaults = data?.getAllVaults ?? [];

	return (
		<OptionalWrapper
			data={loading}
			elseComponent={
				<div className="flex flex-wrap -mx-4 mt-16">
					{allVaults.map((vault) => (
						<SingleVault
							vault={vault}
							key={vault.id}
							refetchVaults={refetchVaults}
						/>
					))}
				</div>
			}
		>
			<Loading className="absolute left-0 mt-12 ml-8 m-auto w-12 h-12" />
		</OptionalWrapper>
	);
};

export default AllVaults;
