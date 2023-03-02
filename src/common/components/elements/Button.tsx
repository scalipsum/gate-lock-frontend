import React, { ButtonHTMLAttributes } from 'react';
import spinner from '../../../assets/gif/spinner.gif';
import OptionalWrapper from './wrapper/OptionalWrapper';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'normal' | 'small';
	kind?: 'primary' | 'secondary' | 'approve' | 'deny';
	className?: string;
	containerClassName?: string;
	loading?: boolean;
}

const Button = ({
	size = 'normal',
	kind = 'primary',
	className,
	containerClassName,
	children,
	loading,
	...props
}: ButtonProps) => {
	const backgroundColor = `${
		kind === 'primary'
			? 'bg-blue'
			: kind === 'secondary'
			? 'bg-gray6'
			: kind === 'approve'
			? 'bg-green'
			: 'bg-red'
	}`;
	// const buttonSize = `w-${size === 'normal' ? 'full' : 'auto'}`;
	const padding =
		size === 'small'
			? 'px-4 py-2'
			: loading
			? 'py-4 pr-10 pl-16'
			: 'py-4 px-10';

	return (
		<div className={containerClassName}>
			<button
				className={`${className} ${backgroundColor} ${padding} text-white rounded-lg
                shadow-md shadow-black-500/30 transition-all transform hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
                flex items-center justify-center
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

export default Button;
