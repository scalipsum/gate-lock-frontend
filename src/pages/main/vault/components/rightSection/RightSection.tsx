import React, { FC } from 'react';
import AddCredentialSection from './AddCredentialSection';
import RightSectionFooter from './RightSectionFooter';
import RightSectionProfile from './RightSectionProfile';

type RightSectionProps = {
	className?: string;
};

const RightSection: FC<RightSectionProps> = ({ className }) => {
	return (
		<div className={`${className} pl-6 bg-gray1 relative`}>
			<RightSectionProfile />
			<AddCredentialSection />
			<RightSectionFooter />
		</div>
	);
};

export default RightSection;
