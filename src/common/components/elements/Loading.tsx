import React, { FC } from 'react';
import spinner from '../../../assets/gif/spinner.gif';

type LoadingProps = {
	className?: string;
};

const Loading: FC<LoadingProps> = ({ className }) => {
	return (
		<img
			src={spinner}
			alt="Loading..."
			className={`${className} w-10 h-10`}
		/>
	);
};

export default Loading;
