import React, { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType, object, string } from 'yup';
import Input from '../../../../common/components/elements/Input';
import { AiFillLock, AiTwotoneMail } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import Button from '../../../../common/components/elements/Button';
import { useAuthContext } from '../../auth.provider';
import { useLoginUserMutation } from '../../../../generated/graphql';

type LoginFormProps = {
	defaultEmail: string;
};

const loginSchema = object({
	email: string().email('Email must be valid.').required('Email is required.'),
	password: string().required('Password is required.'),
});
type LoginData = InferType<typeof loginSchema>;

const LoginForm: FC<LoginFormProps> = ({ defaultEmail }) => {
	const { setIsLoggedIn } = useAuthContext();
	const [, loginUser] = useLoginUserMutation();

	/**
	 * Form Submit
	 */
	const onSubmit = async (data: LoginData) => {
		const { data: loginData, error: loginError } = await loginUser(data);
		if (loginData?.login?.email) return setIsLoggedIn(true);
		if (loginError) return console.log(loginError);
	};

	/**
	 * Form Controller
	 */
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginData>({
		// @ts-ignore
		resolver: yupResolver(loginSchema),
		defaultValues: { email: defaultEmail },
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="w-full mt-16">
			<Input
				name="email"
				type="email"
				placeholder="Enter your email..."
				icon={<AiTwotoneMail />}
				register={register}
				error={errors.email?.message}
				disabled
			/>
			<Input
				name="password"
				type="password"
				placeholder="Vault access password..."
				icon={<AiFillLock />}
				register={register}
				error={errors.password?.message}
				containerClassName="mt-4"
				autoFocus
			/>
			<Button type="submit" containerClassName="mt-12 text-center">
				Login
			</Button>
		</form>
	);
};

export default LoginForm;
