import React, { FC, useEffect } from 'react';
import Modal from '../../common/components/generic/Modal';

type MainWrapperProps = {
	children: React.ReactNode;
	title: string;
};

const MainWrapper: FC<MainWrapperProps> = ({ children, title }) => {
	useEffect(() => {
		document.title = `${title} | Gate Lock`;
	}, [title]);

	return (
		<div className="relative">
			{/* Global Elements */}
			<Modal />
			{/* Wrapper */}
			<div className="px-6 h-screen w-full">
				<div className="bg-white max-w-container mx-auto h-full">
					{children}
				</div>
			</div>
		</div>
	);
};

export default MainWrapper;
