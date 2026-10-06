import { useState } from "react"

//mengatur props yang diterima dari induk
interface AddTodoFormProps{
    onSubmit: (title: string) => void;
}

export default function AddTodoForm({onSubmit} : AddTodoFormProps){
    //menyimpan teks
    const[input, setInput] = useState("");
    
    //tombol klik
    function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        if(!input.trim()) return;
        onSubmit(input);
        setInput("");
    }
    return(
        <form className="flex" onSubmit={handleSubmit}>
            <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="what needs to be done?"
            className="rounded-s-md grow border border-gray-400 p-2"/>
            <button type="submit" className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800">
                Add
            </button>
        </form>
    )
}