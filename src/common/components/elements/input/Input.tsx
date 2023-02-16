import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	containerClassName?: string;
}

const Input: FC<InputProps> = ({ name, containerClassName, ...props }) => {
	return (
		<div className={containerClassName}>
			<input id={name} {...props} />
		</div>
	);
};

export default Input;
