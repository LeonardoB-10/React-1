const getHeroeByIdAsync = require("../../src/base-pruebas/09-promesas");

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync debe renonar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
      
      // Se usa para indicar que la prueba es asincrona y se debe esperar a que se ejecute el done para que la prueba sea exitosa
      done();
    });
  });

  test("getHeroeByIdAsync debe renonar un herror si el evento no hiciste", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("No se pudo encontrar el héroe",id);
      console.log(error);
      done();

    });
  });
});
