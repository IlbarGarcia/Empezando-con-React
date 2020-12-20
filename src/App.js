import Curso from './Tarjeta'
import logo from './logo.svg';//importammos una imagen la cual se encentra en la misma carpeta
import './App.css'; //aqui importamos el estilo para este elemento el cual se encuentra dentro de la misma carpeta

 //creamos un componente por medio de una funcion, y devuelve un elemento//
const App= () => (
    <div>
      <Curso nombre='Ilbar' apellido="Garcia" /> {/*reutilizamos el elemento que creamos */}
      <Curso nombre='Erika' apellido="Castro" /> {/*usamos el elemento curso y le pasamos de forma dinamica dos propieades */}
      <Curso nombre='Alberto' apellido="Barros" />
    </div>
  );


export default App; //exportamos el componente App
