import { render, screen } from "@testing-library/react";
import { DatosPersonales } from "../src/DatosPersonales";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <Datospersonales />", () => {
  const title = "Hola, Soy Goku";
  const subTitle = "Soy el mejor";

  // test("Debe de hacer match con el snaphot", () => {
  //   const { container } = render(<FirstApp title={title} />);
  //   expect(container).toMatchSnapshot();
  // });

  test("Debe de mostrar el mensaje Hola soy Goku", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    // const { getByText } = render(<FirstApp title={ title }/>);
    // expect(getByText(title)).toBeInTheDocument();
  });

  test("Debe de mostrar el titulo en un h1", () => {
    render(<FirstApp title={title} />);
    // Sirve para buscar por el atributo role
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("Debe de mostrar el subtítulo enviado por props", () => {
    render(<FirstApp title={title} subTitle={subTitle} />);
    // Sirve para buscar todos los elementos que coincidan con el texto
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});

describe("pruebas datos personales", () => {
  const saludo = "Hola";
  // const edad = 18;

  test("Debe de mostrar el mensaje Hola soy Goku", () => {
    render(<DatosPersonales saludo={saludo} />);
    expect(screen.getByText(saludo)).toBeTruthy();
  });
});
