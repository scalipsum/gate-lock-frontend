import React, { FC, InputHTMLAttributes, useEffect, useState } from 'react';
import OptionalWrapper from './wrapper/OptionalWrapper';
import { IconContext } from 'react-icons';
import { colors } from '../../styles/colors';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	// Functional
	name: string;
	label?: string;
	infoText?: string;
	error?: string | any;
	disabled?: boolean;
	icon?: JSX.Element;
	autoFocus?: boolean;
	// Styling
	containerClassName?: string;
	className?: string;
	activeColor?: string;
	// Form
	register: any;
}

const Input: FC<InputProps> = ({
	// Functional
	name,
	label,
	infoText,
	error,
	disabled,
	icon,
	autoFocus,
	// Styling
	className,
	containerClassName,
	activeColor,
	// Form
	register,
	...props
}) => {
	const [value, setValue] = useState<string | number | readonly string[]>();
	const [active, setActive] = useState<boolean>(false);

	useEffect(() => {
		if (props.defaultValue) setValue(props.defaultValue);
	}, [props.defaultValue]);

	useEffect(() => {
		if (autoFocus) setActive(true);
	}, [autoFocus]);

	// Colors
	const leftSectionColor = active
		? `${error ? 'bg-red' : activeColor ?? 'bg-blue'}`
		: `${error ? 'bg-red' : 'bg-gray3'}`;
	const borderColor = `${error ? 'border-red' : 'border-gray2'}`;
	const backgroundColor = `${disabled ? 'bg-gray2' : 'bg-white'}`;
	const textColor = `${disabled ? 'text-gray4' : 'text-black'}`;

	// Sizes
	const leftSectionWidth = `${icon ? 'w-12' : 'w-6'}`;
	const inputPaddingLeft = `${icon ? 'pl-16' : 'pl-10'}`;

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
					value={value}
					onChange={(e) => setValue(e.target.value)}
					disabled={disabled}
					autoFocus={autoFocus}
					{...register(name)}
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
