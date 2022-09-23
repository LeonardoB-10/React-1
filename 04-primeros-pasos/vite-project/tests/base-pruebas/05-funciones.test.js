const {
  getUser,
  getUsuarioActivo,
} = require("../../src/base-pruebas/05-funciones");

console.clear();
describe("Pruebas en 05-funciones", () => {
  test("getUsuarioActivo debe de retornar un objeto", () => {
    const testUser = {
      uid: "ABC567",
      username: "Vinicio",
    };

    const user = getUser();
    //El (toEqual) es para comparar objetos
    //El (toBe) es para comparar valores primitivos
    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const nombre = "Vinicio";

    const user = getUsuarioActivo(nombre);

    expect(user).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
