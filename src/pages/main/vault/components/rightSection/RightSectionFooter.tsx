import React, { FC } from 'react';
import { AiOutlineCluster } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../../../../common/styles/colors';

type RightSectionFooterProps = {};

const RightSectionFooter: FC<RightSectionFooterProps> = () => {
	const navigate = useNavigate();
	return (
		<div className="absolute bottom-0 left-0 right-0 px-4 pb-6">
			{/* Back Button */}
			<button
				className="bg-gray2 rounded-lg w-full px-4 py-2 flex items-center justify-between transform transition-all duration-500 ease-out hover:bg-gray3 cursor-pointer"
				onClick={() => navigate('/')}
			>
				<AiOutlineCluster size="52" color={colors.gray4} />
				<p className="text-center">Back To All Vaults</p>
				<div className="w-1/8" />
			</button>
		</div>
	);
};

export default RightSectionFooter;
