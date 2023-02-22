import React, { FC } from 'react';

type MainWrapperProps = {
	children: React.ReactNode;
};

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
	return <div className="px-8 py-4">{children}</div>;
};

export default MainWrapper;
