import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

type VaultPageProps = {};

const VaultPage: FC<VaultPageProps> = ({}) => {
	const params = useParams();
	return (
		<div>
			<p>Vault: ${params.id}</p>
		</div>
	);
};

export default VaultPage;
