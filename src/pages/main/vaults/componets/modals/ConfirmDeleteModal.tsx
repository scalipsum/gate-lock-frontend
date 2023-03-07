import React, { FC, useState } from 'react';
import { OperationContext } from 'urql';
import Button from '../../../../../common/components/elements/button';
import {
	showError,
	showSuccess,
} from '../../../../../common/helpers/showToast';
import { useDeleteVaultMutation } from '../../../../../generated/graphql';
import { useMainContext } from '../../../main.provider';

type ConfirmDeleteModalProps = {
	id: string;
	name: string;
	refetchVaults: (opts?: Partial<OperationContext> | undefined) => void;
};

const ConfirmDeleteModal: FC<ConfirmDeleteModalProps> = ({
	id,
	name,
	refetchVaults,
}) => {
	const { setModal } = useMainContext();
	const [loading, setLoading] = useState<boolean>(false);
	const [, deleteVault] = useDeleteVaultMutation();

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

	return (
		<div>
			<h3 className="text-center mt-3">
				Are you sure you want to delete "{name}" vault?
			</h3>
			<p className="mt-2 text-center">
				This action is <b>not reversible.</b> All credentials will be
				lost.
			</p>

			<div className="flex justify-center items-center mt-12">
				<Button kind="secondary" onClick={() => setModal(null)}>
					Cancel
				</Button>
				<Button
					kind="deny"
					loading={loading}
					onClick={onVaultDelete}
					className="ml-4"
				>
					Delete Vault
				</Button>
			</div>
		</div>
	);
};

export default ConfirmDeleteModal;
