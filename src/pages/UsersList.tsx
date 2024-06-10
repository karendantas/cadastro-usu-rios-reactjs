import { useContext } from "react"
import { UserContext } from "../contexts/usersContexts"
import { useNavigate } from "react-router-dom";

export function UsersList (){
    const {users} = useContext(UserContext);
    const navigate = useNavigate();

    function handleDeleteUser(userId: string){
        console.log(userId)
    }
    return (
        <main className="max-w-6xl h-screen mx-auto flex  flex-col justify-center items-center ">
            <div className = "w-full flex flex-col gap-7 ">
                {users.map((user) => {
                    return (
                        <div className="bg-pink-500 w-full py-5 px-3 rounded-md flex justify-between items-center">
                            <div className="flex flex-col ">
                                <strong className="text-2xl text-slate-800">{user.name}</strong>
                                <span className="text-lg text-slate-200">email: {user.email}</span>
                                <span className="text-lg text-slate-200">idade: {user.age} anos</span>
                            </div>

                            <button 
                                className="h-[40px] w-[40px] bg-purple-700 flex items-center justify-center rounded-md"
                                onClick={ () => handleDeleteUser(user.id)}
                                >
                                <strong> X </strong>
                            </button>

                        </div>
                        )
                })}

            </div>

            <button 
                className="mt-20 bg-pink-600 hover:bg-pink-500 w-[600px] py-4 px-3 rounded-md md:text-xl"
                onClick={() => navigate('/')}
                > Voltar </button>
        </main>
    )
}