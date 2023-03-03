import React, { FC, useEffect } from 'react';

type MainWrapperProps = {
	children: React.ReactNode;
	title: string;
};

const MainWrapper: FC<MainWrapperProps> = ({ children, title }) => {
	useEffect(() => {
		document.title = `${title} | Gate Lock`;
	}, [title]);

	return (
		<div className="px-6 h-screen w-full">
			<div className="bg-white max-w-container mx-auto pt-8 px-12 h-full shadow-container">
				{children}
			</div>
		</div>
	);
};

export default MainWrapper;
