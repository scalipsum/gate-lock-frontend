import React, { FC, useState } from 'react';
import Button from '../../../../common/components/elements/button';
import Input from '../../../../common/components/elements/Input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateVaultMutation } from '../../../../generated/graphql';
import { showError, showSuccess } from '../../../../common/helpers/showToast';
import { useMainContext } from '../../main.provider';

const createVaultSchema = z.object({
	name: z
		.string({
			required_error: 'Name is required',
			invalid_type_error: 'Name must be a string',
		})
		.max(24),
});
type CreateVaultData = {
	name: string;
};

const CreateVaultModal: FC = () => {
	const { setModal } = useMainContext();
	const [loading, setLoading] = useState<boolean>(false);

	const [, createVault] = useCreateVaultMutation();

	/**
	 * Form Submit
	 */
	const onSubmit = async (data: CreateVaultData) => {
		setLoading(true);
		console.log(data.name);
		const { data: createData, error: createError } = await createVault({
			input: { name: data.name },
		});
		if (createData?.createVault?.id) {
			showSuccess('Vault has been created.');
			setModal(null);
		}
		if (createError) showError(createError.message);
		setLoading(false);
	};

	/**
	 * Form Controller
	 */
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateVaultData>({ resolver: zodResolver(createVaultSchema) });

	return (
		<div>
			<h3>Create a Vault</h3>
			<p>All your credentials will be stored here.</p>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full mt-8 flex flex-col"
			>
				<Input
					name="name"
					label="Vault name"
					placeholder="Your vault name..."
					register={register}
					error={errors.name?.message}
					infoText="Max 24 chars."
					autoFocus
				/>
				<Button
					type="submit"
					containerClassName="mt-6 self-center"
					loading={loading}
				>
					Create vault
				</Button>
			</form>
		</div>
	);
};

export default CreateVaultModal;
