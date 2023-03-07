import React, { FC } from 'react';

type RightSectionProps = {
	className?: string;
};

const RightSection: FC<RightSectionProps> = ({ className }) => {
	return (
		<div className={`${className} px-4 bg-gray1`}>
			<h3>Profile section</h3>
		</div>
	);
};

export default RightSection;
