import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp'
import { DaatosPersonales } from './DatosPersonales'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <DaatosPersonales />
      {/* <CounterApp value={15} /> */}
  </React.StrictMode>
)
