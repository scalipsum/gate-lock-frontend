import React, { FC, InputHTMLAttributes, useState } from 'react';
import OptionalWrapper from '../wrapper/OptionalWrapper';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	// Functional
	name: string;
	label?: string;
	// Styling
	containerClassName?: string;
	className?: string;
	activeColor?: string;
}

const Input: FC<InputProps> = ({
	// Functional
	name,
	label,
	// Styling
	className,
	containerClassName,
	activeColor,
	...props
}) => {
	const [active, setActive] = useState<boolean>(false);

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
					className={`w-6 h-full absolute top-0 left-0 rounded-tl-lg rounded-bl-lg transition-colors duration-300 ease-in-out ${
						active ? `bg-${activeColor ?? 'blue'}` : 'bg-gray3'
					}`}
				/>
				<input
					id={name}
					name={name}
					className={`py-4 pl-9 pr-4 rounded-lg w-full border border-gray2 text-black placeholder:text-gray4 text-lg`}
					onFocus={() => setActive(true)}
					onBlur={() => setActive(false)}
					{...props}
				/>
			</div>
		</div>
	);
};

export default Input;
