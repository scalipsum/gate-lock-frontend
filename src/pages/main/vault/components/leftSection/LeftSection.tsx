import React, { FC } from 'react';
import { colors } from '../../../../../common/styles/colors';
import AllCredentials from './AllCredentials';
import LeftSectionHeader from './LeftSectionHeader';

type LeftSectionProps = {
	vaultId: string;
	className?: string;
};

const LeftSection: FC<LeftSectionProps> = ({ vaultId, className }) => {
	return (
		<div
			className={`${className}`}
			style={{ borderRight: `1px solid ${colors.gray2}` }}
		>
			<LeftSectionHeader vaultId={vaultId} />
			<AllCredentials vaultId={vaultId} />
		</div>
	);
};

export default LeftSection;
