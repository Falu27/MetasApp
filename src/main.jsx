import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Encabezado from './components/compartido/Encabezado.jsx'
import Principal from './components/compartido/Principal.jsx'
import Pie from './components/compartido/Pie.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Encabezado />
    <Principal />
    <Pie />
  </React.StrictMode>,
)
