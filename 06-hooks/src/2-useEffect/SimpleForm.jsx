import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "Vinicio",
    email: "vinicio@gmail.com",
  });

  const { name, email } = formState;

  // const onInputChange = (value)
  const onInputChange = ({ target }) => {
    // const { name, value } = target;
      ({
      ...formState, //se copia el estado anterior
      [target.name]: target.value, //se actualiza el estado con el nuevo valor
    });
  };

  useEffect(() => {
    // console.log("hCambio la forma");
  }, [name]); //se ejecuta solo una vez cuando el componente se renderiza por primera vez

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          value={name}
          onChange={onInputChange}
        />
        {
            // Despues del && se ejecuta el codigo si la condicion es verdadera
            (name === 'Leonardo') && <Message />
        }
        <input
          type="email"
          name="email"
          className="form-control mt-2"
          placeholder="Tu correo"
          value={email}
          onChange={onInputChange} //se ejecuta cada vez que se escribe en el input
        />
      </div>
    </>
  );
};
