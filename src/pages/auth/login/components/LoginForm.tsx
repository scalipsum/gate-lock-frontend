import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType, object, string } from 'yup';
import Input from '../../../../common/components/elements/Input';
import { AiTwotoneMail } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import Button from '../../../../common/components/elements/Button';
import {
	MeQuery,
	useLoginUserMutation,
	useLogoutMutation,
	useMeQuery,
	User,
} from '../../../../generated/graphql';
import OptionalWrapper from '../../../../common/components/elements/wrapper/OptionalWrapper';

const loginFormSchema = object({
	email: string().email('Email must be valid.').required('Email is required.'),
});
type LoginFormData = InferType<typeof loginFormSchema>;

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		// @ts-ignore
	} = useForm<LoginFormData>({ resolver: yupResolver(loginFormSchema) });

	const [currentUser, setCurrentUser] = useState<MeQuery>();
	const [loggedIn, setLoggedIn] = useState<boolean>(false);

	const [, loginUser] = useLoginUserMutation();
	const [{ data }, refetch] = useMeQuery();
	const [, logoutUser] = useLogoutMutation();

	const handleLogIn = async (data: LoginFormData) => {
		console.log('Logging user in...');
		const { data: userData, error } = await loginUser({
			email: 'test3@test.com',
			password: 'test',
		});
		if (userData?.login?.email) {
			setLoggedIn(true);
			console.log('Logged In.');
			console.log(userData.login.name);
		}
		if (error) console.log(error);
	};

	const handleGetCurrentUser = async () => {
		console.log('User fetching...');
		const response = await refetch({ requestPolicy: 'network-only' });
		console.log(response);
		console.log(data);
	};

	const handleLogout = async () => {
		console.log('Logging user out...');
		const { data } = await logoutUser({});
		if (data?.logout) console.log('Logged out.');
	};

	const me = currentUser?.me;

	return (
		<>
			<form onSubmit={handleSubmit(handleLogIn)} className="w-full mt-16">
				<Input
					name="email"
					placeholder="Enter your email..."
					icon={<AiTwotoneMail />}
					register={register}
					error={errors.email?.message}
				/>
				<Button
					type="submit"
					containerClassName="mt-12 text-center"
					disabled={loggedIn}
				>
					Hard Login
				</Button>
			</form>
			<Button type="button" onClick={handleGetCurrentUser} className="mt-4">
				Get Me
			</Button>
			<OptionalWrapper data={me}>
				<p>Logged in user:</p>
				<p>{me?.name}</p>
				<p>{me?.email}</p>
			</OptionalWrapper>
			<Button type="button" onClick={handleLogout} className="mt-4">
				Logout
			</Button>
		</>
	);
};

export default LoginForm;
