//Importamos la libreria para validar las propiedades
import PropTypes from "prop-types";
import { useState } from "react";

//Caundo se cambiar el estado se vuelve a renderizar el componente y se vuelve a ejecutar el codigo de la funcion del componente 
export const CounterApp = ({ value }) => {

    //[valor del estado, funcion para modificar el estado] = useState(valor inicial del estado)   
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        //setCounter((c) => c + 1);
        setCounter(counter + 1);
    }

    const handleResta = () => {
        //setCounter((c) => c + 1);
        if(counter > 0){
          setCounter(counter - 1)
        }
    }  

    const valorInicial = () => {
        //setCounter((c) => c + 1);
        setCounter(value);
    } 

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleResta}>-1</button>
      <button aria-label="btn-resert" onClick={valorInicial}>Reset</button>
      {/* Se puede tomar el ID el arial-label */}
      
      {/* <button name="btn-resert" onClick={valorInicial}>Reset</button> */}
      {/* <button ="btidn-resert" onClick={valorInicial}>Reset</button> */}

    </>
  );
};

CounterApp.propTypes = {
  //Es obligatorio que se envie el parametro
  value: PropTypes.number.isRequired,
};
