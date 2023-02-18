import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType, object, string } from 'yup';
import Input from '../../../../common/components/elements/Input';
import { AiTwotoneMail } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import Button from '../../../../common/components/elements/Button';

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

	const handleSaveData = (data: LoginFormData) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(handleSaveData)} className="w-full">
			<Input
				name="email"
				placeholder="Enter your email..."
				containerClassName="mt-16"
				icon={<AiTwotoneMail />}
				register={register}
				error={errors.email?.message}
			/>
			<Button type="submit" containerClassName="mt-12 text-center">
				Enter
			</Button>
		</form>
	);
};

export default LoginForm;
