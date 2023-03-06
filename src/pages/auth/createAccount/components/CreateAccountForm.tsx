import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillLock } from 'react-icons/ai';
import { string, object, InferType } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../../../common/components/elements/button';
import Input from '../../../../common/components/elements/Input';

const createAccountSchema = object({
	firstName: string().required('First name is required.'),
	lastName: string().required('First name is required.'),
	password: string().required('Password is required').min(8),
});

type CreateAccountData = InferType<typeof createAccountSchema>;

type CreateAccountFormProps = {
	userId: string;
};

const CreateAccountForm: FC<CreateAccountFormProps> = ({ userId }) => {
	const [loading, setLoading] = useState<boolean>(false);

	const onSubmit = async (data: CreateAccountData) => {
		setLoading(true);
		console.log(data);
		setLoading(false);
	};

	/**
	 * Form Controller
	 */
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateAccountData>({
		// @ts-ignore
		resolver: yupResolver(createAccountSchema),
	});

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-128 mt-12 flex flex-col"
		>
			<div className="flex items-center justify-between">
				<Input
					name="firstName"
					type="text"
					placeholder="Your first name..."
					label="First name"
					register={register}
					error={errors.firstName?.message}
					containerClassName="mr-4"
				/>
				<Input
					name="lastName"
					type="text"
					placeholder="Your last name..."
					label="Last name"
					register={register}
					error={errors.lastName?.message}
				/>
			</div>
			<Input
				name="password"
				type="password"
				label="Vault access password..."
				placeholder="Enter your password"
				icon={<AiFillLock />}
				register={register}
				error={errors.password?.message}
				containerClassName="mt-8 w-full"
				infoText="Min. 8 characters."
			/>
			<Button
				type="submit"
				containerClassName="mt-16 self-center"
				loading={loading}
			>
				Join
			</Button>
		</form>
	);
};

export default CreateAccountForm;
