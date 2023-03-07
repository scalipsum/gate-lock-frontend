import React, { ButtonHTMLAttributes, FC } from 'react';
import spinner from '../../../../assets/gif/spinner.gif';
import OptionalWrapper from '../wrapper/OptionalWrapper';

interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'normal' | 'small';
	className?: string;
	containerClassName?: string;
	loading?: boolean;
}

const TextButton: FC<TextButtonProps> = ({
	size = 'normal',
	className,
	containerClassName,
	children,
	loading,
	...props
}) => {
	return (
		<div className={containerClassName}>
			<button
				className={`${className} text-black text-base
                disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
                flex items-center justify-center hover:underline font-normal tracking-normal
            `}
				{...props}
			>
				<OptionalWrapper data={loading}>
					<img
						src={spinner}
						alt="Loading..."
						className="w-10 h-10 -ml-4 absolute top-1.5 left-8"
					/>
				</OptionalWrapper>
				{children}
			</button>
		</div>
	);
};

export default TextButton;
