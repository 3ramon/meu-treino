import { useState, ChangeEvent } from "react";

export function useForm<T>(initialState: T){
    const [form, setForm] = useState<T>(initialState)


    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const evento = event.target as HTMLInputElement;
        const {name, value, type, checked} = evento
        
        
        setForm((prev)=>({
            ...prev,
            [name]: type === 'checkbox'
            ? checked
            : type === 'number' && value !== ""
            ? Number(value)
            : value
        }))    
    }
    
    function resetForm(){
        setForm(initialState)
    }

    return {
        form,
        handleChange,
        resetForm,
        setForm
    }
}