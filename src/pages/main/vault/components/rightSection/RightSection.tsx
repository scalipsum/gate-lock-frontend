import React, { FC } from 'react';
import RightSectionFooter from './RightSectionFooter';

type RightSectionProps = {
	className?: string;
};

const RightSection: FC<RightSectionProps> = ({ className }) => {
	return (
		<div className={`${className} px-4 bg-gray1 relative`}>
			{/* <h3>Profile section</h3> */}
			<RightSectionFooter />
		</div>
	);
};

export default RightSection;
