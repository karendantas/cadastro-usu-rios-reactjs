import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "./components/input";

const NewCustomerFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  cpf: z.string(),
  age: z.number(),
  password: z.string(),

})

type NewCustomerFromType = z.infer<typeof NewCustomerFormSchema>

function Home() {
  const {register, handleSubmit} = useForm<NewCustomerFromType>({
    resolver: zodResolver(NewCustomerFormSchema)
  });

  function handleCreateCustomer (data: NewCustomerFromType ){
    console.log(data);
  }

  return (
   <main className="max-w-6xl h-screen mx-auto flex justify-center items-center ">
      <div className="w-[600px] h-[600px] flex justify-center items-center flex-col border border-pink-500 rounded-md mx-5 shadow-xl shadow-pink-600">
   
        <h2 className="text-2xl mb-11">Cadastro</h2>

        <form onSubmit={handleSubmit(handleCreateCustomer)} className="w-[80%] flex flex-col items-center gap-6 ">

          <Input type="text" placeholder=" Nome" {...register("name")}/>

          <Input type="email" placeholder="Email" {...register("email")}/>

          <Input type="text" placeholder="CPF" {...register("cpf")}/>

          <Input type = "number" placeholder="Idade" {...register("age")} />

          <Input type="password" placeholder="Senha" {...register("password")}/>

          <button type="submit" className="bg-pink-500 hover:bg-pink-400 w-[50%] py-4 px-3 mt-5 rounded-md md:text-xl"> Confirmar</button>
        </form>
  
      </div>
   </main>
  )
}

export default Home
