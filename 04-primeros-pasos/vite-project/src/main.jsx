import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp'
import { DatosPersonales } from './DatosPersonales'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      {/* <DatosPersonales /> */}
      <CounterApp value={100}/>
      {/* <FirstApp title="Hola, Soy Vegeta" /> */}
      {/* <CounterApp value={15} /> */}
  </React.StrictMode>
)
