import React, { FC } from 'react';
import { useMeQuery } from '../../../../../generated/graphql';

type RightSectionProfileProps = {};

const RightSectionProfile: FC<RightSectionProfileProps> = () => {
	const [{ data }] = useMeQuery();

	const initials = data?.me?.name
		?.split(' ')
		.map((name) => name.charAt(0))
		.join('');
	const name = data?.me?.name;

	return (
		<div className="pt-6 flex items-center mb-16">
			{/* Avatar */}
			<div className="bg-gray3 w-24 h-24 rounded-full flex items-center justify-center">
				<h2 className="text-gray4" style={{ fontSize: 32 }}>
					{initials}
				</h2>
			</div>
			<h3 className="ml-3 font-thin text-gray6" style={{ fontSize: 24 }}>
				{name}
			</h3>
		</div>
	);
};

export default RightSectionProfile;
