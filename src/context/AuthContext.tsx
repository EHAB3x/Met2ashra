import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthContextType, userData } from "@interfaces/index";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(
    window.localStorage.getItem("token") || null
  );
  const [user, setUser] = useState<userData | null>(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
      setUserToken(token);
    } else {
      setIsLoggedIn(false);
      setUserToken(null);
      setUser(null);
    }
  }, [window.localStorage.getItem("token")]);

  const login = (data: userData) => {
    const { access_token } = data;
    if (access_token) {
      setIsLoggedIn(true);
      setUserToken(access_token);
      setUser(data);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserToken(null);
    setUser(null);
    window.localStorage.removeItem("token");
  };

  console.log(isLoggedIn);
  console.log(userToken);
  console.log(user);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userToken, user, logout, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};
