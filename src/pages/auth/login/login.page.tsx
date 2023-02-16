import React, { FC } from 'react';
import SymbolLogo from '../../../assets/svg/gl-logo-symbol.svg';
import TextLogo from '../../../assets/svg/gl-logo-text.svg';

const LoginPage: FC = () => {
	return (
		<div className="h-screen w-full flex justify-center items-center">
			{/* Logo */}
			<div className="flex flex-col items-center mb-32">
				<img src={SymbolLogo} alt="Gate Lock Symbol" className="w-64" />
				<img src={TextLogo} alt="Gate Lock Title" className="mt-6 w-64" />
			</div>
			{/* Input */}
			{/* Button */}
		</div>
	);
};

export default LoginPage;
