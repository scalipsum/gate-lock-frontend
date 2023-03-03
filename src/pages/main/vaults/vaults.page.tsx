import React, { FC } from 'react';
import AllVaults from './componets/AllVaults';
import VaultsFooter from './componets/VaultsFooter';
import VaultsHeader from './componets/VaultsHeader';

const VaultsPage: FC = () => {
	return (
		<div className="relative h-full">
			<VaultsHeader />
			<AllVaults />
			<VaultsFooter />
		</div>
	);
};

export default VaultsPage;
