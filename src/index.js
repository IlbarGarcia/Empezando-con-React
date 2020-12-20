import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //importamos el estilo para el sitio en donde vamos a poner el elemento
import App from './App'; //importamos el componente App del archivo App
// import Curso from './Tarjeta'

ReactDOM.render(
    <App />,//renderizamos el elemento App que cramos 
  document.getElementById('root') //pintamos este elemento en el div root
);



