import Curso from './Tarjeta'
import logo from './logo.svg';//importammos una imagen la cual se encentra en la misma carpeta
import './App.css'; //aqui importamos el estilo para este elemento el cual se encuentra dentro de la misma carpeta

function App() { //creamos un componente por medio de una funcion, y devuelve un elemento//
  return (
    <div>
      <Curso /> {/*reutilizamos el elemento que creamos */}
      <Curso />
      <Curso />
    </div>
  );
}

export default App; //exportamos el componente App
