import { createContext, ReactNode, useEffect, useState } from "react";
import { UserType } from "../@types/user";
import { api } from "../services/api";



interface UserContextType {
    users: UserType [],
    GetUsers(): Promise<void>;
}
export const UserContext = createContext({}  as UserContextType);

export function UserContextProvider ({ children}: { children: ReactNode }){
    const [users, setUsers] = useState<UserType[]>([]);

    async function GetUsers (){

        try{
            const response = await api.get('/users');
            setUsers(response.data);

        }catch(err){
            console.log(err);
        }
     
    }
    useEffect( () => {
        GetUsers();
    }, [])

    return (
        <UserContext.Provider value={ { users, GetUsers } }>
            {children}
        </UserContext.Provider>
    )
}