import Curso from './Tarjeta'
import logo from './logo.svg';//importammos una imagen la cual se encentra en la misma carpeta
import './App.css'; //aqui importamos el estilo para este elemento el cual se encuentra dentro de la misma carpeta

 //creamos un componente por medio de una funcion, y devuelve un elemento//
const App= () => (
    <div>
      <Curso nombre='Ilbar' apellido="Garcia" /> {/*reutilizamos el elemento que creamos */}
      <Curso /> {/*usamos el elemento curso y le pasamos de forma dinamica dos propieades */}
      <Curso /> {/*aqui no le pasmos ningun parametro, para que los proptypes carguen los valores por defecto */}
    </div>
  );


export default App; //exportamos el componente App
