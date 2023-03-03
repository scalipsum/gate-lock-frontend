import React, {
	createContext,
	Dispatch,
	FC,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react';
import { useMeQuery } from '../../generated/graphql';

type AuthContextType = {
	isLoggedIn: boolean;
	setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextType>({
	isLoggedIn: false,
	setIsLoggedIn: () => {},
});

type AuthProviderProps = { children: React.ReactNode };

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	/**
	 * Check If Already Logged In
	 */
	const [{ data }] = useMeQuery();
	useEffect(() => {
		if (data?.me?.id) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [data, setIsLoggedIn]);

	return (
		<AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
