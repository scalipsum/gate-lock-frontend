import React, { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useMainContext } from '../../../pages/main/main.provider';
import { colors } from '../../styles/colors';

export type ModalType = {
	width?: 'small' | 'medium' | 'large';
	height?: 'small' | 'medium' | 'large';
	content?: React.ReactNode;
	scrollable?: boolean;
};

const Modal: FC = () => {
	const { modal, setModal } = useMainContext();

	/**
	 * Window width
	 */
	const width = `${
		modal?.width === 'small'
			? 'w-2/12'
			: modal?.width === 'large'
			? 'w-7/12'
			: 'w-4/12'
	}`;

	/**
	 * Window height
	 */
	const height = `${
		modal?.height === 'small'
			? 'h-1/5'
			: modal?.height === 'medium'
			? 'h-1/4'
			: modal?.height === 'large'
			? 'h-4/5'
			: 'auto'
	}`;

	return (
		<>
			{/* Window */}
			<div
				className={`absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ${
					modal?.scrollable && 'overflow-y-scroll'
				} ${width} ${height} bg-white rounded-lg px-8 py-6 -mt-4 transform transition-all duration-150 z-125 ${
					modal
						? 'opacity-1 visible scale-100'
						: 'opacity-0 invisible scale-80'
				}`}
			>
				{/* Close button */}
				<div className="relative">
					<button
						onClick={() => setModal(null)}
						className="absolute top-0 right-0 p-1 -mr-6 -mt-4"
					>
						<AiOutlinePlus
							size="36"
							className="transform rotate-45"
							color={colors.black}
						/>
					</button>
				</div>
				<div>
					{/* Content */}
					{modal?.content}
				</div>
			</div>
			{/* Backdrop */}
			<div
				className={`w-screen h-screen absolute opacity-0 transition-all transform duration-150 ease-out z-100 cursor-pointer ${
					modal ? 'opacity-60 visible' : 'opacity-0 invisible'
				}`}
				style={{ backgroundColor: '#000' }}
				onClick={() => setModal(null)}
			/>
		</>
	);
};

export default Modal;
