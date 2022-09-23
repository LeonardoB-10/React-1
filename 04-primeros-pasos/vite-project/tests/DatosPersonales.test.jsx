import { DaatosPersonales } from "../src/DatosPersonales";
import { render } from "@testing-library/react";

describe("Pruebas en <FirstApp />", () => {
  test("debe de hacer march con el snapshot", () => {

    const saludo = "Hola";
    const edad = 18;
    
    //renderiza el componente y lo guarda en el contenedor de memoria
    const {container} = render(<DaatosPersonales saludo={saludo} edad={edad} />);
    //compara el snapshot con el componente actual y si no son iguales falla la prueba y crea un nuevo snapshot
    expect(container).toMatchSnapshot();
  });

  test("debe el titulo en un h1", () => {
    const saludo = "Hola";
    const edad = 18;
    //renderiza el componente y lo guarda en el contenedor de memoria
    const {container, getByText} = render(<DaatosPersonales saludo edad={edad} />);
    //verifica que el texto exista en el componente y no sea null
    expect(getByText(saludo)).toBeTruthy();

    const h1 = container.querySelector("h1");
    console.log(h1.innerHTML)
    
    // verifica que el texto sea igual al que se envio por parametro
    //expect(h1.innerHTML).toBe(saludo);

    expect(h1.innerHTML).toContain(saludo);
  });


});
