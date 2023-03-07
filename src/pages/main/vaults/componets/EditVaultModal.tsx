import React, { FC, useState } from 'react';
import Button from '../../../../common/components/elements/button';
import Input from '../../../../common/components/elements/Input';
import { useForm } from 'react-hook-form';
import { InferType, object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
	useDeleteVaultMutation,
	useUpdateVaultMutation,
} from '../../../../generated/graphql';
import { showError, showSuccess } from '../../../../common/helpers/showToast';
import { useMainContext } from '../../main.provider';
import { OperationContext } from 'urql';
import TextButton from '../../../../common/components/elements/button/TextButton';

const editVaultSchema = object({
	name: string().required('Vault name is required.').max(16),
});
type CreateVaultData = InferType<typeof editVaultSchema>;

type EditVaultModalProps = {
	id: string;
	name: string;
	refetchVaults: (opts?: Partial<OperationContext> | undefined) => void;
};

const EditVaultModal: FC<EditVaultModalProps> = ({
	id,
	name,
	refetchVaults,
}) => {
	const { setModal } = useMainContext();
	const [loading, setLoading] = useState<boolean>(false);

	const [, deleteVault] = useDeleteVaultMutation();
	const [, updateVault] = useUpdateVaultMutation();

	/**
	 * Vault Delete
	 */
	const onVaultDelete = async () => {
		setLoading(true);
		const { data: deleteData, error: deleteError } = await deleteVault({
			input: { id },
		});
		if (deleteData?.deleteVault) {
			await refetchVaults();
			showSuccess('Vault deleted.');
			setModal(null);
		}
		if (deleteError) showError(deleteError.message);
		setLoading(false);
	};

	/**
	 * Update Vault - Form Submit
	 */
	const onVaultUpdate = async (data: CreateVaultData) => {
		setLoading(true);
		console.log(data.name);
		console.log(id);
		const { data: updateVaultData, error: updateVaultError } =
			await updateVault({
				input: { id, name: data.name },
			});
		if (updateVaultData?.updateVault?.id) {
			showSuccess('Vault has been updated.');
			setModal(null);
		}
		if (updateVaultError) showError(updateVaultError.message);
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
	} = useForm<CreateVaultData>({
		resolver: yupResolver(editVaultSchema),
		defaultValues: { name },
	});

	return (
		<div>
			<h3>Edit "{name}" Vault</h3>

			<form
				onSubmit={handleSubmit(onVaultUpdate)}
				className="w-full mt-8 flex flex-col"
			>
				<Input
					name="name"
					label="Vault name"
					placeholder="Your vault name..."
					register={register}
					error={errors.name?.message}
					infoText="Max 24 chars."
					style={{ textTransform: 'capitalize' }}
				/>
				<div className="flex justify-between items-end mt-8">
					<Button type="submit" loading={loading}>
						Update Name
					</Button>
					<TextButton type="button" onClick={onVaultDelete}>
						Delete vault
					</TextButton>
				</div>
			</form>
		</div>
	);
};

export default EditVaultModal;
