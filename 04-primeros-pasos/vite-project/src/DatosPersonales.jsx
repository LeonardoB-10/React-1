//Todas las funciones iniciadas con mayuscula son componentes

//Se crea el componente y se le envia las propiedades que se van a usar en el componente
import PropTypes from "prop-types";

const  fechaNacimiento = () => {
    return <p>06/04/2000</p>
}

export const DaatosPersonales = ({ saludo,edad } ) =>{

  return (
    <>
      <h1>Hola</h1>
        <p>Nombre: Leonardo</p>
        <p>Apellido: Borja</p>
        {fechaNacimiento() }
        <p>{saludo}</p>
        <p>Con edad: {edad}</p>
    </>
  );
}

//Sirve para validar las propiedades que se le envian al componente
DaatosPersonales.propTypes = {
    //Es obligatorio que se envie el parametro
    saludo: PropTypes.string.isRequired,
    edad : PropTypes.number.isRequired
}

// Sirve para darle un valor por defecto a las propiedades
DaatosPersonales.defaultProps = {
    edad: 18,
    saludo : "Hola",
    name: "Leonardo"
}
//Exportamos el componente para poder usarlo en otros archivos

