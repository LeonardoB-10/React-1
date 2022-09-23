const { getSaludo } = require("../../src/base-pruebas/02-template-string");


describe( 'Pruebas en 02-template-string.test.js', () => {
    test( 'Debe de retornar un string', () => {
        // const mensaje = getSaludo( 'Hola mundo' );
        // expect( mensaje ).toBe( 'Hola mundo' );

        const nombre = 'Vinicio';
        const mensaje = getSaludo( nombre );

        expect( mensaje ).toBe( `Hola ${nombre}`);

        //toBe -> es para comparar valores primitivos (string, number, boolean, null, undefined)
    });
});
