import React, { FC, useMemo } from 'react';
import { AiOutlineHdd } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { OperationContext } from 'urql';
import Button from '../../../../common/components/elements/button';
import OptionalWrapper from '../../../../common/components/elements/wrapper/OptionalWrapper';
import { SingleVaultFragment, useMeQuery } from '../../../../generated/graphql';
import { useMainContext } from '../../main.provider';
import EditVaultModal from './EditVaultModal';

type SingleVaultProps = {
	vault: SingleVaultFragment;
	refetchVaults: (opts?: Partial<OperationContext> | undefined) => void;
};

const SingleVault: FC<SingleVaultProps> = ({ vault, refetchVaults }) => {
	const { setModal } = useMainContext();

	const [{ data: meData }] = useMeQuery();

	/**
	 * Created By Text
	 */
	const createdBy =
		vault.createdBy.id === meData?.me?.id ? 'You' : vault.createdBy.email;

	/**
	 * Members Number Text
	 */
	const membersNumber = useMemo(() => {
		if (vault.members) {
			const memberCount = vault.members.length;
			return `${memberCount} Member${memberCount > 1 ? 's' : ''}`;
		}
	}, [vault]);

	return (
		<div className="xl:w-1/3 md:w-1/2 w-full px-4 mb-8">
			<div className="bg-gray2 rounded-lg pr-4 flex items-center justify-between transition-all duration-300 shadow-sm hover:shadow-md hover:pointer">
				{/* Left - clickable area */}
				<Link to={`/vaults/${vault.id}`}>
					<div className="flex items-center my-6 ml-4 pr-8">
						<AiOutlineHdd size="64" className="mr-2" />
						<div>
							<h3 className="truncate">{vault.name}</h3>
							<p className="-mt-1">created by {createdBy}</p>
						</div>
					</div>
				</Link>

				{/* Right */}
				<div className="flex flex-col items-center">
					<Button size="small" className="z-20">
						{membersNumber}
					</Button>
					<OptionalWrapper data={createdBy === 'You'}>
						<Button
							size="small"
							kind="secondary"
							className="mt-1 -mb-2"
							onClick={() =>
								setModal({
									content: (
										<EditVaultModal
											id={vault.id}
											name={vault.name}
											refetchVaults={refetchVaults}
										/>
									),
									width: 'medium',
								})
							}
						>
							Edit
						</Button>
					</OptionalWrapper>
				</div>
			</div>
		</div>
	);
};

export default SingleVault;
