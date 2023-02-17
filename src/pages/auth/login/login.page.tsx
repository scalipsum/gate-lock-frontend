import React, { FC } from 'react';
import SymbolLogo from '../../../assets/svg/gl-logo-symbol.svg';
import TextLogo from '../../../assets/svg/gl-logo-text.svg';
import Input from '../../../common/components/elements/input/Input';
import { AiTwotoneMail } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export type LoginFormData = {
	email: string;
};
const loginFormSchema = yup.object({
	email: yup.string().email().required(),
});

const LoginPage: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		// @ts-ignore:next-line
	} = useForm<LoginFormData>({ resolver: yupResolver(loginFormSchema) });

	const handleSaveData = (data: LoginFormData) => {
		console.log(data);
	};

	return (
		<div className="h-screen w-full flex justify-center items-center">
			<div className="flex flex-col items-center mb-32">
				<img src={SymbolLogo} alt="Gate Lock Symbol" className="w-80" />
				<img src={TextLogo} alt="Gate Lock Title" className="mt-6 w-80" />

				<form onSubmit={handleSubmit(handleSaveData)}>
					<Input
						name="email"
						placeholder="Enter your email..."
						containerClassName="mt-16"
						icon={<AiTwotoneMail />}
						register={register}
						error={errors.email?.message}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
			{/* Button */}
		</div>
	);
};

export default LoginPage;
