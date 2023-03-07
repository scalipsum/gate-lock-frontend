import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import LeftSection from './components/leftSection/LeftSection';
import MiddleSection from './components/middleSection/MiddleSection';
import RightSection from './components/rightSection/RightSection';

type VaultPageProps = {};

const VaultPage: FC<VaultPageProps> = () => {
	const params = useParams();
	const vaultId = params.id ?? '';

	return (
		<div className="w-full h-full flex">
			<LeftSection className="w-1/4" vaultId={vaultId} />
			<MiddleSection className="w-2/4" />
			<RightSection className="w-1/4" />
		</div>
	);
};

export default VaultPage;
