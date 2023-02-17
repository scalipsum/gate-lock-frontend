import React, { FC, InputHTMLAttributes, useState } from 'react';
import OptionalWrapper from '../wrapper/OptionalWrapper';
import { IconContext } from 'react-icons';
import { colors } from '../../../styles/colors';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	// Functional
	name: string;
	label?: string;
	infoText?: string;
	error?: string;
	disabled?: boolean;
	icon?: JSX.Element;
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
	disabled,
	icon,
	// Styling
	className,
	containerClassName,
	activeColor,
	...props
}) => {
	const [, setValue] = useState<string>();
	const [active, setActive] = useState<boolean>(false);

	// Colors
	const leftSectionColor = active
		? `bg-${error ? 'red' : activeColor ?? 'blue'}`
		: `bg-${error ? 'red' : 'gray3'}`;
	const borderColor = `border-${error ? 'red' : 'gray2'}`;
	const backgroundColor = `bg-${disabled ? 'gray2' : 'white'}`;
	const textColor = `text-${disabled ? 'gray4' : 'black'}`;

	// Sizes
	const leftSectionWidth = `w-${icon ? 12 : 6}`;
	const inputPaddingLeft = `pl-${icon ? 16 : 10}`;

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
				{/* Left Section */}
				<div
					className={`${leftSectionWidth} h-full absolute top-0 left-0 rounded-tl-lg rounded-bl-lg transition-colors duration-500 ease-in-out ${leftSectionColor}`}
				>
					{/* Icon */}
					<OptionalWrapper data={icon}>
						<IconContext.Provider
							value={{
								color: active ? colors.white : colors.gray4,
								size: '26px',
								className: 'transition-colors',
							}}
						>
							<div className="flex w-full h-full justify-center items-center">
								{icon}
							</div>
						</IconContext.Provider>
					</OptionalWrapper>
				</div>
				<input
					id={name}
					name={name}
					className={`py-4 ${inputPaddingLeft} pr-4 rounded-lg w-full border ${borderColor} ${textColor} placeholder:text-gray4 text-lg ${backgroundColor}`}
					onFocus={() => setActive(true)}
					onBlur={() => setActive(false)}
					onChange={(e) => setValue(e.target.value)}
					disabled={disabled}
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
