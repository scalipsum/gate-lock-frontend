import React, { FC } from 'react';
import { AiFillLock, AiOutlineCreditCard, AiOutlineFile } from 'react-icons/ai';
import { colors } from '../../../../../common/styles/colors';
import CredentialButton from './CredentialButton';

type AddCredentialSectionProps = {};

const AddCredentialSection: FC<AddCredentialSectionProps> = ({}) => {
	const buttonIconProps = { color: colors.gray4, size: 38 };

	return (
		<div>
			<h3 className="font-thin mb-4 text-gray6" style={{ fontSize: 18 }}>
				Add
			</h3>
			<div className="flex items-center 2xl:justify-start justify-between">
				<CredentialButton
					icon={<AiFillLock {...buttonIconProps} />}
					text="Login"
					onClick={() => true}
				/>
				<CredentialButton
					icon={<AiOutlineCreditCard {...buttonIconProps} />}
					text="Bank Card"
					className="xl:ml-14"
					onClick={() => true}
				/>
				<CredentialButton
					icon={<AiOutlineFile {...buttonIconProps} />}
					text="Product Key"
					className="xl:ml-14"
					onClick={() => true}
				/>
			</div>
		</div>
	);
};

export default AddCredentialSection;
