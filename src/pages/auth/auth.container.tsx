import React, { FC } from 'react';

type AuthContainerProps = {
	children: React.ReactNode;
};

const AuthContainer: FC<AuthContainerProps> = ({ children }) => {
	return (
		<div className="h-screen w-full relative overflow-hidden">
			{/* Waves */}
			<div className="wave -top"></div>
			<div className="wave -mid"></div>
			<div className="wave -bottom"></div>

			{/* Content */}
			{children}

			{/* Copyright */}
			<p className="absolute bottom-0 left-0 text-gray4 text-center w-full mb-1">
				A product by{' '}
				<a
					href="https://www.linkedin.com/in/vladbbr/"
					className="hover:underline"
				>
					Vlad Bibire.
				</a>
			</p>
		</div>
	);
};

export default AuthContainer;
