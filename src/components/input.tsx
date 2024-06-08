
interface InputProps {
    placeholder?: string
    type: "text" | "email" | "password"
}
export function Input({ placeholder, type }: InputProps){
    return (
        <input
            className=" border border-pink-500 rounded-md outline-none bg-transparent w-[100%] px-3 py-3" 
            type={type} 
            placeholder={placeholder} />
    )
}

