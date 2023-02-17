import React, { FC } from 'react';
import SymbolLogo from '../../../assets/svg/gl-logo-symbol.svg';
import TextLogo from '../../../assets/svg/gl-logo-text.svg';
import Input from '../../../common/components/elements/input/Input';

const LoginPage: FC = () => {
	return (
		<div className="h-screen w-full flex justify-center items-center">
			<div className="flex flex-col items-center mb-32">
				<img src={SymbolLogo} alt="Gate Lock Symbol" className="w-80" />
				<img src={TextLogo} alt="Gate Lock Title" className="mt-6 w-80" />
				<Input
					name="email"
					placeholder="Enter your email..."
					containerClassName="mt-16"
					label="Email"
					// infoText="Valid emails only."
					// error="Invalid email."
					disabled={true}
				/>
			</div>
			{/* Button */}
		</div>
	);
};

export default LoginPage;
