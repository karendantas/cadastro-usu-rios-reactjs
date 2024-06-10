import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../components/input";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

const NewCustomerFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  age: z.number(),

})

type NewCustomerFromType = z.infer<typeof NewCustomerFormSchema>

function Home() {
  const navigate = useNavigate();

  const {register, handleSubmit} = useForm<NewCustomerFromType>({
    resolver: zodResolver(NewCustomerFormSchema)
  });

  async function handleCreateCustomer (data: NewCustomerFromType ){
    await api.post('/users', {
      name: data.name,
      email: data.email,
      age: data.age
    })
  }

  function handleGoUserListPage(){
    navigate('/users');
  }

  return (
   <main className="max-w-6xl h-screen mx-auto flex flex-col justify-center items-center ">
      <div className="w-[600px] h-[500px] flex justify-center items-center flex-col border border-pink-500 rounded-md mx-5 shadow-xl shadow-pink-600">
   
        <h2 className="text-2xl mb-11">Cadastro</h2>

        <form onSubmit={handleSubmit(handleCreateCustomer)} className="w-[80%] flex flex-col items-center gap-6">

          <input type="text" placeholder=" Nome" {...register("name")}/>

          <input type="email" placeholder="Email" {...register("email")}/>

          <input type = "text" placeholder="Idade" {...register("age")} />


          <button className="bg-pink-500 hover:bg-pink-400 w-[50%] py-4 px-3 mt-5 rounded-md md:text-xl"> Confirmar</button>
        </form>

      </div>
      <button 
        className="mt-20 bg-pink-600 hover:bg-pink-500 w-[600px] py-4 px-3 rounded-md md:text-xl"
        onClick={handleGoUserListPage}
        > Ver usuários </button>
   </main>
  )
}

export default Home
