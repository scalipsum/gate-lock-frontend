import React, { createContext, FC, useContext, useState } from 'react';
import { ModalType } from '../../common/components/generic/Modal';

type MainContextType = {
	modal: ModalType | null;
	setModal: React.Dispatch<React.SetStateAction<ModalType | null>>;
};

export const MainContext = createContext<MainContextType>({
	modal: null,
	setModal: () => {},
});

type MainContextProps = { children: React.ReactNode };

const MainProvider: FC<MainContextProps> = ({ children }) => {
	const [modal, setModal] = useState<ModalType | null>(null);

	return (
		<MainContext.Provider value={{ modal, setModal }}>
			{children}
		</MainContext.Provider>
	);
};

export const useMainContext = () => useContext(MainContext);

export default MainProvider;
