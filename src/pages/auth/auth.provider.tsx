import React, {
	createContext,
	Dispatch,
	FC,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react';
import { CurrentUserFragment, useMeQuery } from '../../generated/graphql';

type AuthContextType = {
	isLoggedIn: boolean;
	setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
	currentUser: CurrentUserFragment | null;
};

export const AuthContext = createContext<AuthContextType>({
	isLoggedIn: false,
	setIsLoggedIn: () => {},
	currentUser: null,
});

type AuthProviderProps = { children: React.ReactNode };

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [currentUser, setCurrentUser] = useState<CurrentUserFragment | null>(
		null,
	);

	/**
	 * Check If Already Logged In
	 */
	const [{ data }] = useMeQuery();
	useEffect(() => {
		if (data?.me?.id) {
			setIsLoggedIn(true);
			setCurrentUser(data?.me);
		} else {
			setIsLoggedIn(false);
			setCurrentUser(null);
		}
	}, [data, setIsLoggedIn]);

	return (
		<AuthContext.Provider
			value={{ isLoggedIn, setIsLoggedIn, currentUser }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
