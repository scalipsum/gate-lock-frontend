import React, { FC } from 'react';
import SymbolLogo from '../../../assets/svg/gl-logo-symbol.svg';
import TextLogo from '../../../assets/svg/gl-logo-text.svg';
import LoginForm from './components/LoginForm';

const LoginPage: FC = () => {
	return (
		<div className="h-screen w-full flex justify-center items-center">
			<div className="flex flex-col items-center mb-48 w-128">
				<img src={SymbolLogo} alt="Gate Lock Symbol" className="w-80" />
				<img src={TextLogo} alt="Gate Lock Title" className="mt-6 w-80" />
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;
