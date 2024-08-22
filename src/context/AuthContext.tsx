import{ 
createContext, 
ReactNode, 
useContext, 
useEffect, 
useState 
} from "react"

const AuthContext = createContext({});

export const Auth = ()=> useContext(AuthContext);

export const AuthProvider = ({children}:{children : ReactNode})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userToken, setUserToken] = useState(window.localStorage.getItem("token") || null);

    const logout = ()=>{
        setIsLoggedIn(false);
        setUserToken(null);
        window.localStorage.removeItem("token");
    }

    useEffect(()=>{
        const unSub = ()=>{
            logout()
        };

        return ()=> unSub();
    },[])

    return(
        <AuthContext.Provider value={{isLoggedIn, userToken, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
