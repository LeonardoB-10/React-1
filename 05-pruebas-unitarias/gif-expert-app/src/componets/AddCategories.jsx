import { useState } from "react";

export const AddCategories = ({onNewCategory}) => {
  
  const [inputValue, setinputValue] = useState("");

    const handleInputChange = (e) => {
        setinputValue(e.target.value);//se obtiene el valor del input y se guarda en inputValue 
    }

    const onSumit = (e) => {
        e.preventDefault();// Evita que se recargue la pagina
        if(inputValue.trim().length <= 1) return;
        // setcategories(categories => [...categories,inputValue]);
        
        // Se envia el valor del input al componente padre GifExpertApp
        onNewCategory(inputValue.trim());
        setinputValue("");
    }

  return (
    // Se envia el evento al metodo onSumit para que no se recargue la pagina
    <form onSubmit={(event) => onSumit(event)}>
        <input type="text" 
        placeholder="BuscarGif" 
        //se le pasa el valor del input al estado inputValue para que se actualice  
        value={inputValue}
        //se le pasa el evento al metodo handleInputChange para que se actualice el estado inputValue
        onChange={(event) => handleInputChange(event)}/>
    </form>
    );

};
