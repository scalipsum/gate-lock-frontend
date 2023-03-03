import React, { FC } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useMainContext } from '../../../pages/main/main.provider';
import { colors } from '../../styles/colors';

const Modal: FC = () => {
	const { modalOpen, setModalOpen } = useMainContext();

	return (
		<>
			{/* Window */}
			<div
				className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-125 transform transition-all duration-150 ${
					modalOpen ? 'opacity-1 visible' : 'opacity-0 invisible'
				}`}
			>
				<div
					className={`h-64 w-64 bg-white rounded-lg p-4 -mt-16 transform transition-all duration-150 ${
						!modalOpen ? 'scale-80' : 'scale-100'
					}`}
				>
					{/* Header */}
					<div className="relative">
						{/* Close button */}
						<button
							onClick={() => setModalOpen(false)}
							className="absolute top-0 right-0 p-1 -mr-3 -mt-3"
						>
							<AiOutlinePlus
								size="36"
								className="transform rotate-45"
								color={colors.black}
							/>
						</button>
						{/* Title */}
						<h2 className="text-center">Title</h2>
					</div>

					{/* Content */}
					<h3>Modal</h3>
				</div>
			</div>

			{/* Backdrop */}
			<div
				className={`w-screen h-screen absolute opacity-0 transition-all transform duration-150 ease-out z-100 ${
					modalOpen ? 'opacity-60 visible' : 'opacity-0 invisible'
				}`}
				style={{ backgroundColor: '#000' }}
			/>
		</>
	);
};

export default Modal;
