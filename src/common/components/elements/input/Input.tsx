import React, { FC, InputHTMLAttributes, useEffect, useState } from 'react';
import OptionalWrapper from '../wrapper/OptionalWrapper';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	// Functional
	name: string;
	label?: string;
	infoText?: string;
	error?: string;
	// Styling
	containerClassName?: string;
	className?: string;
	activeColor?: string;
}

const Input: FC<InputProps> = ({
	// Functional
	name,
	label,
	infoText,
	error,
	// Styling
	className,
	containerClassName,
	activeColor,
	...props
}) => {
	const [, setValue] = useState<string>();
	const [active, setActive] = useState<boolean>(false);

	const color = active
		? `bg-${error ? 'red' : activeColor ?? 'blue'}`
		: `bg-${error ? 'red' : 'gray3'}`;
	const borderColor = `border-${error ? 'red' : 'gray2'}`;

	return (
		<div className={`w-full ${containerClassName}`}>
			{/* Label */}
			<OptionalWrapper data={label}>
				<label htmlFor={name} className="block mb-2">
					{label}
				</label>
			</OptionalWrapper>
			{/* Input */}
			<div className="relative rounded-lg">
				<div
					className={`w-6 h-full absolute top-0 left-0 rounded-tl-lg rounded-bl-lg transition-colors duration-300 ease-in-out ${color}`}
				/>
				<input
					id={name}
					name={name}
					className={`py-4 pl-9 pr-4 rounded-lg w-full border ${borderColor} text-black placeholder:text-gray4 text-lg`}
					onFocus={() => setActive(true)}
					onBlur={() => setActive(false)}
					onChange={(e) => setValue(e.target.value)}
					{...props}
				/>
			</div>
			{/* Info text */}
			<OptionalWrapper data={infoText && !error}>
				<p className="text-sm text-right text-gray4 mt-1">{infoText}</p>
			</OptionalWrapper>
			{/* Error */}
			<OptionalWrapper data={error}>
				<p className="text-sm text-red mt-1">{error}</p>
			</OptionalWrapper>
		</div>
	);
};

export default Input;
