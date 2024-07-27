import { useRef } from "react";

const Input = ({ label, type = "text", name, id, placeholder, accept, onChangeFonk, defaultValue }) => {

   const inputRef = useRef() 
   console.log(inputRef)

   return (
      <div className="flex flex-col mt-4 gap-1">
         <label className="text-xl" htmlFor={id}>{label}</label>
         <input
            ref={inputRef}
            className={`text-xl py-2 rounded-md outline-slate-400 w-[400px] ${type == "file" ? " indent-0" : " indent-3 "}`}
            type={type}
            name={name}
            placeholder={placeholder}
            id={id}
            accept={accept}
            onChange={(e) => onChangeFonk(e, type)}
            defaultValue={defaultValue}
         />
         
      </div>
   );
};

export default Input;