import React, { FC, useEffect } from 'react';
import Loading from '../../../../../common/components/elements/Loading';
import OptionalWrapper from '../../../../../common/components/elements/wrapper/OptionalWrapper';
import { showError } from '../../../../../common/helpers/showToast';
import { colors } from '../../../../../common/styles/colors';
import { useGetAllCredentialsQuery } from '../../../../../generated/graphql';

type LeftSectionProps = {
	vaultId: string;
	className?: string;
};

const LeftSection: FC<LeftSectionProps> = ({ vaultId, className }) => {
	const [{ data, fetching: loading, error }] = useGetAllCredentialsQuery({
		variables: { input: { vaultId } },
	});

	useEffect(() => {
		if (error) showError(error.message);
	}, [error]);

	return (
		<div
			className={`${className}`}
			style={{ borderRight: `1px solid ${colors.gray2}` }}
		>
			<div className="border border-black">
				<OptionalWrapper data={loading}>
					<Loading className="w-12 h-12" />
				</OptionalWrapper>
				<p>Credentials: {JSON.stringify(data?.getAllCredentials)}</p>
			</div>
		</div>
	);
};

export default LeftSection;
