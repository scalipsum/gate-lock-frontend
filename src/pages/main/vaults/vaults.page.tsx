import React, { FC } from 'react';
import VaultsFooter from './componets/VaultsFooter';
import VaultsHeader from './componets/VaultsHeader';

const VaultsPage: FC = () => {
	return (
		<div className="relative h-full">
			<VaultsHeader />
			<VaultsFooter />
		</div>
	);
};

export default VaultsPage;
