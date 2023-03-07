import React, { FC, useEffect } from 'react';
import Loading from '../../../../../common/components/elements/Loading';
import OptionalWrapper from '../../../../../common/components/elements/wrapper/OptionalWrapper';
import { showError } from '../../../../../common/helpers/showToast';
import { useGetAllCredentialsQuery } from '../../../../../generated/graphql';

type AllCredentialsProps = {
	vaultId: string;
};

const AllCredentials: FC<AllCredentialsProps> = ({ vaultId }) => {
	const [{ data, fetching: loading, error }] = useGetAllCredentialsQuery({
		variables: { input: { vaultId } },
	});

	useEffect(() => {
		if (error) showError(error.message);
	}, [error]);
	return (
		<OptionalWrapper
			data={loading}
			elseComponent={
				<div className="mt-8">
					{/* <p>
						Credentials: {JSON.stringify(data?.getAllCredentials)}
					</p> */}
				</div>
			}
		>
			<Loading className="w-12 h-12" />
		</OptionalWrapper>
	);
};

export default AllCredentials;
