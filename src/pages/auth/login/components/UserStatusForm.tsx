import React, { Dispatch, FC, SetStateAction } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { InferType, object, string } from 'yup';
import Input from '../../../../common/components/elements/Input';
import { AiTwotoneMail } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import Button from '../../../../common/components/elements/Button';
import {
	useCheckUserStatusMutation,
	UserStatus,
} from '../../../../generated/graphql';

type UserStatusFormProps = {
	setUserStatus: Dispatch<SetStateAction<UserStatus | undefined>>;
	setEmail: Dispatch<SetStateAction<string>>;
};

const userStatusSchema = object({
	email: string().email('Email must be valid.').required('Email is required.'),
});
type UserStatusData = InferType<typeof userStatusSchema>;

const UserStatusForm: FC<UserStatusFormProps> = ({
	setUserStatus,
	setEmail,
}) => {
	const [, getUserStatus] = useCheckUserStatusMutation();

	/**
	 * Form Submit
	 */
	const onSubmit = async (data: UserStatusData) => {
		setEmail(data.email);
		const { data: statusData } = await getUserStatus({
			email: data.email,
		});
		setUserStatus(statusData?.checkUserStatus);
	};

	/**
	 * Form Controller
	 */
	const {
		register,
		handleSubmit,
		formState: { errors },
		// @ts-ignore
	} = useForm<UserStatusData>({ resolver: yupResolver(userStatusSchema) });

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="w-full mt-16">
				<Input
					name="email"
					placeholder="Enter your email..."
					icon={<AiTwotoneMail />}
					register={register}
					error={errors.email?.message}
				/>
				<Button type="submit" containerClassName="mt-12 text-center">
					Submit
				</Button>
			</form>
		</>
	);
};

export default UserStatusForm;
