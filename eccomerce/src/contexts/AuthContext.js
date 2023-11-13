import { createContext, useState, useEffect } from "react";
import {Token, User} from "@/api"

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider(props){

    const {children} = props
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            const token = tokenCtrl.getToken();

            if(!token) {
                logout();
                setLoading(false);
                return;
            }

            if(tokenCtrl.hasExpired(token)){
                logout()
            } else {
                await login(token);
            }
        })();
    }, []);

    const login = async(token) => {
        try{
            //Guardar el token en el localstorage
           tokenCtrl.setToken(token)
           //obtener datos de usuario
           const response = await userCtrl.getMe()
           //Setear los datos de usuario en el estado user
           setUser(response)
           //seteamos el token en nuestro estado
           setToken(token);
           setLoading(false);
        } catch (error){
            console.error(error)
            setLoading(false)
        }
    }

    const logout = () => {
        tokenCtrl.removeToken();
        setToken(null)
        setUser(null)
    }

    const updateUser = (key, value) => {
        setUser({
            ...user, 
            [key]:value
        });
    };

    const data = {
        accessToken: token,
        user,
        login,
        logout,
        updateUser,
    };

    if(loading) return null

    return(
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}