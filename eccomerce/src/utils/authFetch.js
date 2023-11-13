import {Token} from '@/api'
import { parseSetCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export async function authFetch(url, params){
    const tokenCtrl = new Token();
    const token = tokenCtrl.getToken();

    const logout = () => {
        tokenCtrl.removeToken();
        window.location.replace('/')
    }

    
    if(!token){
        logout();
    } else {
        if(tokenCtrl.hasExpired(token)){
            logout();
        }else {
            const paramsTemp = {
                ...params,
                headers:{
                    ...params?.hraders,
                    Authorization: `Bearer ${token}`,

                }
            }
            try{
                return await fetch(url, paramsTemp)
            }catch(error){
                return error
            }
        }
    }
}