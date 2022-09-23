//Todas las funciones iniciadas con mayuscula son componentes

//Se crea el componente y se le envia las propiedades que se van a usar en el componente
import PropTypes from "prop-types";

const  fechaNacimiento = () => {
    return <p>06/04/2000</p>
}

export const DatosPersonales = ({saludo,edad} ) =>{

  return (
    <>
      <h1 data-testid="custom-element2">Hola</h1>
        <p>Nombre: Leonardo</p>
        <p>Apellido: Borja</p>
        {fechaNacimiento() }
        <div data-testid="custom-element" >{saludo}</div>
        <p>Con edad: {edad}</p>
    </>
  );
}

//Sirve para validar las propiedades que se le envian al componente
DatosPersonales.propTypes = {
    //Es obligatorio que se envie el parametro
    saludo: PropTypes.string.isRequired,
    edad : PropTypes.number.isRequired
}

// Sirve para darle un valor por defecto a las propiedades
DatosPersonales.defaultProps = {
  saludo : "Hola",
  edad: 18,
  name: "Leonardo"
}
//Exportamos el componente para poder usarlo en otros archivos

