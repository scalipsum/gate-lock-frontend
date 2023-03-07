import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../common/components/elements/Loading';
import OptionalWrapper from '../../../common/components/elements/wrapper/OptionalWrapper';
import { showError } from '../../../common/helpers/showToast';
import { useGetAllCredentialsQuery } from '../../../generated/graphql';

type VaultPageProps = {};

const VaultPage: FC<VaultPageProps> = () => {
	const params = useParams();
	const vaultId = params.id ?? '';

	const [{ data, fetching: loading, error }] = useGetAllCredentialsQuery({
		variables: { input: { vaultId } },
	});

	console.log(data?.getAllCredentials);

	useEffect(() => {
		if (error) showError(error.message);
	}, [error]);

	return (
		<div>
			<OptionalWrapper data={loading}>
				<Loading className="w-12 h-12" />
			</OptionalWrapper>

			<p>Credentials: {JSON.stringify(data?.getAllCredentials)}</p>
		</div>
	);
};

export default VaultPage;
