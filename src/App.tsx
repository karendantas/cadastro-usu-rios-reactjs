import { Input } from "./components/input"


function App() {
 
  return (
   <main className="max-w-6xl h-screen mx-auto flex justify-center items-center ">
      <div className="w-[600px] h-[600px] flex justify-center items-center flex-col border border-pink-500 rounded-md mx-5 shadow-xl shadow-pink-600">
   
        <h2 className="text-2xl mb-11">Cadastro</h2>

        <form action="" className="w-[80%] flex flex-col items-center gap-6 ">

          <Input type="text" placeholder=" Nome"/>

          <Input type="email" placeholder="Email"/>

          <Input type="text" placeholder="CPF"/>

          <Input type="password" placeholder="Senha"/>

          <button className="bg-pink-500 hover:bg-pink-400 w-[50%] py-4 px-3 mt-5 rounded-md md:text-xl"> Confirmar</button>
        </form>
  
      </div>
   </main>
  )
}

export default App
