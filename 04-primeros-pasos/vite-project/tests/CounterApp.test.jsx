import { CounterApp } from "../src/CounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

//getByText -> Busca por texto en el componente un valor parecido
describe("Realinar una foto de <CounterAPP/>", () => {
  const valor = 100;

  test("Debe de hacer match con el snaphot", () => {
    const { container } = render(<CounterApp value={valor} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de hacer match con el snaphot", () => {
    render(<CounterApp value={valor} />);
    expect(screen.getByText(valor)).toBeTruthy();
  });

  test("Debe de incrementar con el boton +1", () => {
    render(<CounterApp value={200} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // fireEvent.click(screen.getByText("Reset"));

    // screen.debug();
    // expect(screen.getByText('103')).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "btn-resert" }));
    expect(screen.getByText(200)).toBeTruthy();
  });

  test("Debe de decrementar con el boton -1", () => {
    render(<CounterApp value={valor} />);
    fireEvent.click(screen.getByText("-1"));
    screen.debug(); // Muestra el html actual
    expect(screen.getByText("99")).toBeTruthy();
  });
});
