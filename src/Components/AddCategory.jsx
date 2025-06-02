import { useState } from "react"


export const AddCategory = () => {
  
    const [inputValue, setinputValue] = useState('One Punch')

    const onInputChange = (event) =>{
        setinputValue(event.target.value);
    };

    const onSubmit =(event) =>{
        console.log(event);
    }

    return (
    <form onSubmit={(event) =>onSubmit(event)}>
        <input 
        type="text" 
        placeholder="Buscar gifs"
        value = {inputValue}
        onChange={onInputChange}
        />
    </form>
  )
}
