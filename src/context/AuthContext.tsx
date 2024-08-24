import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthContextType, userData } from "@interfaces/index";
import useLogout from "@/src/hooks/useLogout";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { mutate: triggerLogout } = useLogout();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(
    window.localStorage.getItem("token") || null
  );
  const [user, setUser] = useState<userData | null>(null);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const user = window.localStorage.getItem("user");
  
    if (token) {
      setIsLoggedIn(true);
      setUserToken(token);
      
    } else {
      setIsLoggedIn(false);
      setUserToken(null);
      setUser(null);
    }

    if(user){
      setUser(JSON.parse(user));
    }
  }, []);
  

  const login = (data: userData) => {
    const { access_token } = data;
    if (access_token) {
      setIsLoggedIn(true);
      setUserToken(access_token);
      window.localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    }
  };
  

  const logout = () => {
    triggerLogout();
    setIsLoggedIn(false);
    setUserToken(null);
    setUser(null);
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
  };

  console.log(user);
  
  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userToken, user, logout, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};
