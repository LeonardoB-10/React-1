## Instalaciones npm necesarias 
https://vitejs.dev/guide/
https://jestjs.io/docs/getting-started
https://www.npmjs.com/package/prop-types


npm create vite@latest
**No mezclar yarn con npm!!!!!**
yard prop-types 
yarn add --dev jest

npm install add -D @types/jest!!Lo mismo
yarn add -D @types/jest -> Para utilizar los metodos y no memorizarlos 
yarn add --dev babel-jest @babel/core @babel/preset-env sirve para que babel entienda el codigo de javascript

yarn add -D whatwg-fetch -> Para poder hacer peticiones a una api
 yarn add whatwg-fetch   
 desistarlar en yarn 
  yarn remove whatwg-fetch
 yarn   

npm install --save-dev @testing-library/react -> DOM Testing Library es una librería que nos permite probar componentes de React de una forma sencilla y rápida.
https://jestjs.io/docs/tutorial-react

npm i jest-environment-jsdom -> Para poder hacer pruebas con jest
https://www.npmjs.com/package/jest-environment-jsdom

npm install --save-dev @babel/preset-react -> Para poder usar react en babel
https://babeljs.io/docs/en/babel-preset-react


 **isomorphic-fetch**
isomorphic-fetch -> Para poder hacer peticiones a una api

## Buscar informacion en Jest acerca de los metodos ocupados en clase 
https://jestjs.io/docs/expect

## Informacion clave de React
**Componentes basados en funciones**
Son componentes que no tienen estado, solo reciben props y retornan un elemento de React.

**Comando para ejectura react con vite**
npm run dev
**Comando para ejectura test con jest**
yarn test

**No se puede enviar un objeto como parametro**
No se puede enviar un objeto como parametro, solo se puede enviar un string, un numero o un booleano.

**Como desinstalar un paquete**
npm uninstall nombre-del-paquete

**PropTypes**
Son una forma de documentar los componentes, sirven para validar los tipos de datos que se le envian a los componentes.

**Functional Components**
Son componentes que no tienen estado, solo reciben props y retornan un elemento de React.

**SyntheticEvent**
https://es.reactjs.org/docs/events.html


**Hooks**
https://es.reactjs.org/docs/hooks-intro.html
sirve para manejar el estado de los componentes de forma mas sencilla. 

El estado (value) se mantine en el componente que lo contiene, no en el componente hijo. Por ende solo se puede pasar la funcion que modifica el estado.

```
    const [counter, setCounter] = useState(value);
```

**AAA - Pruebas**
https://es.reactjs.org/docs/testing-recipes.html
Sirve para probar los componentes de forma automatica.

Arreglar -> Aprender -> Aplicar
Actuar -> Aprender -> Aprender
Afirmar -> Aprender -> Aprender



## Informacion clave de React para pruebas unitarias
**JEST**
**Revisar las preubas unitarias**
https://jestjs.io/docs/getting-started
Sirve para probar los componentes de forma automatica.
```
Agregar en el package.json 
{
  "scripts": {
    "test": "jest"
  }
}
```
yarn test -> para ejecutar las pruebas
jest ---watchAll -> para ejecutar las pruebas en modo 
p -> para ejecutar las pruebas en un archivo especifico
observador

yarn add -D jest-environment-jsdom -> Para poder hacer pruebas con jest

```
npm install --save-dev @babel/preset-env -> Para poder usar react en babel
```


### Fracasos - para intentar mas tade 
```
    expect(getByText(saludo)).toBeTruthy(); // -> No funciona
```
