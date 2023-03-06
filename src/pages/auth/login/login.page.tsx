import React, { FC, useState } from 'react';
import SymbolLogo from '../../../assets/svg/gl-logo-symbol.svg';
import TextLogo from '../../../assets/svg/gl-logo-text.svg';
import { UserStatus } from '../../../generated/graphql';
import LoginForm from './components/LoginForm';
import UserStatusForm from './components/UserStatusForm';

const LoginPage: FC = (props) => {
	const [email, setEmail] = useState<string>('');
	const [userStatus, setUserStatus] = useState<UserStatus | undefined>(
		undefined,
	);
	return (
		<div className="h-full flex justify-center items-center">
			<div className="flex flex-col items-center mb-40">
				<img src={SymbolLogo} alt="Gate Lock Logo" className="w-80" />
				<img
					src={TextLogo}
					alt="Gate Lock Logo Text "
					className="mt-6 w-80"
				/>
				<div className="w-128">
					{userStatus === UserStatus.Active ? (
						<LoginForm defaultEmail={email} />
					) : (
						<UserStatusForm
							setUserStatus={setUserStatus}
							setEmail={setEmail}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
