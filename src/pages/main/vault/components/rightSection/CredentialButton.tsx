import React, { FC, useState } from 'react';

type CredentialButtonProps = {
	icon: React.ReactNode;
	text: string;
	onClick?: () => void;
	className?: string;
};

const CredentialButton: FC<CredentialButtonProps> = ({
	icon,
	text,
	onClick,
	className,
}) => {
	const [hover, setHover] = useState<boolean>(false);

	return (
		<button
			className={`${className} w-22`}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onClick={onClick}
		>
			<div
				className={`w-20 h-20 rounded-lg flex items-center justify-center transition duration-300 ${
					hover ? 'bg-gray7' : 'bg-gray3'
				}`}
			>
				{icon}
			</div>
			<p
				className={`text-center mt-px text-gray4 transition duration-300 ${
					hover && 'text-gray4'
				}`}
			>
				{text}
			</p>
		</button>
	);
};

export default CredentialButton;
