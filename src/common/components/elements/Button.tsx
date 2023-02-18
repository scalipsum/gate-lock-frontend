import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: 'normal' | 'small';
	kind?: 'primary' | 'secondary' | 'approve' | 'deny';
	className?: string;
	containerClassName?: string;
}

const Button = ({
	size = 'normal',
	kind = 'primary',
	className,
	containerClassName,
	children,
	...props
}: ButtonProps) => {
	const backgroundColor = `bg-${
		kind === 'primary'
			? 'blue'
			: kind === 'secondary'
			? 'gray6'
			: kind === 'approve'
			? 'green'
			: 'red'
	}`;
	// const buttonSize = `w-${size === 'normal' ? 'full' : 'auto'}`;
	const padding = size === 'small' ? 'px-4 py-2' : 'py-4 px-10';

	return (
		<div className={containerClassName}>
			<button
				className={`${className} ${backgroundColor} ${padding} text-white rounded-lg
                shadow-md shadow-black-500/30 transition-all transform hover:shadow-lg hover:shadow-black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
            `}
				{...props}
			>
				{children}
			</button>
		</div>
	);
};

export default Button;
