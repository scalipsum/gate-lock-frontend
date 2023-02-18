import React, { FC, useEffect } from 'react';
import { useMutation, useQuery } from 'urql';
import SymbolLogo from '../../../assets/svg/gl-logo-symbol.svg';
import TextLogo from '../../../assets/svg/gl-logo-text.svg';
import LoginForm from './components/LoginForm';

const LoginPage: FC = () => {
	const LoginUser = `
        mutation {
            login(input: { email: "test3@test.com", password: "test" }) {
                email
            }
        }`;

	const [{ fetching, error, data }, login] = useMutation(LoginUser);

	console.log(`Data: ${data}`);
	console.log(`fetching: ${fetching}`);
	if (error) console.log(`Error: ${error}`);

	useEffect(() => {
		login();
	}, []);

	return (
		<div className="h-full flex justify-center items-center">
			<div className="flex flex-col items-center mb-40 w-128">
				<img src={SymbolLogo} alt="Gate Lock Logo" className="w-80" />
				<img src={TextLogo} alt="Gate Lock Logo Text " className="mt-6 w-80" />
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;
