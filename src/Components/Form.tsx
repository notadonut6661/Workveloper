import {HTMLInputTypeAttribute } from "react";

interface FormProps  {
    id: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    max?: number;
    min?: number;
    value?: string;
    onChange?: (val: string) => void
}


/**
   * @returns A form styled form element 
   * @param onChange made for using with useState hook to get value from text and number input fields
   * @param max must be higher or equal to min
   * @param min must be lower or equal to max 
   * 
*/
export default function Form({id, placeholder, type, min, max, onChange, value}: FormProps) {
    if (max && min && min > max) {
        throw new Error('Minimal value cannot be lower than maximum');
    }

    return (
    <div className={'InputText'} id={id}>
        <input 
            type={type ?? 'password'} 
            placeholder={placeholder ?? id} 
            max={max}
            min={min}   
            value={value} 
            onChange={ev => {
                if(!onChange) return; 
                onChange(ev.target.value) 
                }}/>
    </div>)
}