import React, { FC, useState } from 'react';
import Button from '../../../../common/components/elements/button';
import Input from '../../../../common/components/elements/Input';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCreateVaultMutation } from '../../../../generated/graphql';
import { showError, showSuccess } from '../../../../common/helpers/showToast';
import { useMainContext } from '../../main.provider';
import { OperationContext } from 'urql';

const createVaultSchema = object({
	name: string().required('Vault name is required.').max(24),
});
type CreateVaultData = InferType<typeof createVaultSchema>;

type CreateVaultModalProps = {
	refetchVaults: (opts?: Partial<OperationContext> | undefined) => void;
};

const CreateVaultModal: FC<CreateVaultModalProps> = ({ refetchVaults }) => {
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
			await refetchVaults();
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
		// @ts-ignore
	} = useForm<CreateVaultData>({ resolver: yupResolver(createVaultSchema) });

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
					capitalize
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
