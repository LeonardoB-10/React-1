import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormCustoHook = () => {

  const objDatosForm = {
    name: "",
    email: "",
    password: "",
  }

  const {formState,onInputChange,name,email, password, onBoorarCampos} = useForm(objDatosForm);

  return (
    <>
      <h1>Formulario custon Hook</h1>
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
          name === "Leonardo" && <Message />
        }
        <input
          type="email"
          name="email"
          className="form-control mt-2"
          placeholder="Tu correo"
          value={email}
          onChange={onInputChange} //se ejecuta cada vez que se escribe en el input
        />

        <input
          type="password"
          name="password"
          className="form-control mt-2"
          placeholder="Password"
          value={password}
          onChange={onInputChange} //se ejecuta cada vez que se escribe en el input
        />
        <button onClick={onBoorarCampos} className="btn btn-primary">Borrar</button>
      </div>
    </>
  );

};
