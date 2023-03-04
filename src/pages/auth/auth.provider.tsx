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
	userLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
	isLoggedIn: false,
	setIsLoggedIn: () => {},
	userLoading: true,
});

type AuthProviderProps = { children: React.ReactNode };

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [userLoading, setUserLoading] = useState<boolean>(true);

	/**
	 * Check If Already Logged In
	 */
	const [{ data, fetching }] = useMeQuery();

	useEffect(() => {
		setUserLoading(fetching);
	}, [fetching]);

	useEffect(() => {
		if (data?.me?.id) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [data, setIsLoggedIn]);

	return (
		<AuthContext.Provider
			value={{ isLoggedIn, setIsLoggedIn, userLoading }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
