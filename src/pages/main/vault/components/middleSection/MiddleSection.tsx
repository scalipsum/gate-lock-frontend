import React, { FC } from 'react';

type MiddleSectionProps = {
	className?: string;
};

const MiddleSection: FC<MiddleSectionProps> = ({ className }) => {
	return (
		<div className={`${className} px-4`}>
			<h3>Credential section</h3>
		</div>
	);
};

export default MiddleSection;
