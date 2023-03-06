import React, { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TextLogo from '../../assets/svg/gl-logo-text.svg';
import OptionalWrapper from '../../common/components/elements/wrapper/OptionalWrapper';

type AuthWrapperProps = {
	children: React.ReactNode;
	title: string;
};

const AuthWrapper: FC<AuthWrapperProps> = ({ children, title }) => {
	// Set Page Title
	useEffect(() => {
		document.title = `${title} | Gate Lock`;
	}, [title]);

	const location = useLocation();
	const emailSentRoute = location.pathname === '/auth/email-sent';
	const notApprovedRoute = location.pathname === '/auth/not-approved';
	const createAccountRoute = location.pathname === '/auth/create-account';

	return (
		<div className="h-screen w-full relative overflow-hidden">
			{/* Waves */}
			<div className="wave -top"></div>
			<div className="wave -mid"></div>
			<div className="wave -bottom"></div>

			{/* Content */}
			{children}

			{/* Copyright */}
			<div className="absolute w-full bottom-0 left-0 flex flex-col items-center">
				<OptionalWrapper
					data={
						emailSentRoute || notApprovedRoute || createAccountRoute
					}
				>
					<img
						src={TextLogo}
						alt="Gate Lock Logo Text "
						className="mb-6 w-80"
					/>
				</OptionalWrapper>
				<p className="text-gray4 w-full mb-1 text-center">
					A product by{' '}
					<a
						href="https://www.linkedin.com/in/vladbbr/"
						className="hover:underline"
					>
						Vlad Bibire.
					</a>
				</p>
			</div>
		</div>
	);
};

export default AuthWrapper;
