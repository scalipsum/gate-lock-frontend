import React, { FC, useEffect } from 'react';

type MainWrapperProps = {
	children: React.ReactNode;
	title: string;
};

const MainWrapper: FC<MainWrapperProps> = ({ children, title }) => {
	// Set Page Title
	useEffect(() => {
		document.title = `${title} | Gate Lock`;
	}, [title]);

	return <div className="px-8 py-4">{children}</div>;
};

export default MainWrapper;
