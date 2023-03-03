import React, {
	createContext,
	Dispatch,
	FC,
	SetStateAction,
	useContext,
	useState,
} from 'react';

type MainContextType = {
	modalOpen: boolean;
	setModalOpen: Dispatch<SetStateAction<boolean>>;
};

export const MainContext = createContext<MainContextType>({
	modalOpen: false,
	setModalOpen: () => {},
});

type MainContextProps = { children: React.ReactNode };

const MainProvider: FC<MainContextProps> = ({ children }) => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);

	return (
		<MainContext.Provider value={{ modalOpen, setModalOpen }}>
			{children}
		</MainContext.Provider>
	);
};

export const useMainContext = () => useContext(MainContext);

export default MainProvider;
