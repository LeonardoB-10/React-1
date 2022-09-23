const { retornaArreglo } = require("../../src/base-pruebas/07-deses-arr");

describe('Prueba en 07-descs-arr', () => { 

    test('Debe renortar un string y un numero', () => { 

    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe('ABC');
    expect(numeros).toBe(123);

    //Proviene del tipo de dato que se esta comparando
    expect(typeof letras).toBe('string');
    expect(typeof numeros).toBe('number');
    });
 });