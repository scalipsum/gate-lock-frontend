import React, { FC, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SymbolLogo from '../../../assets/svg/gl-logo-symbol.svg';
import CreateAccountForm from './components/CreateAccountForm';

const CreateAccountPage: FC = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const userId = location.state.uid;

	useEffect(() => {
		if (!userId) navigate('/auth/login');
		// eslint-disable-next-line
	}, [userId]);

	return (
		<div className="flex flex-col items-center justify-center h-full -mt-16">
			<img src={SymbolLogo} alt="Gate Lock Logo" className="w-64" />
			<h3 className="mt-8">Email confirmed!</h3>
			<h3 className="mt-6">Time to create your account.</h3>
			<CreateAccountForm userId={userId} />
		</div>
	);
};

export default CreateAccountPage;
