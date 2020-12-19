import logo from './logo.svg';//importammos una imagen la cual se encentra en la misma carpeta
import './App.css'; //aqui importamos el estilo para este elemento el cual se encuentra dentro de la misma carpeta

function App() { //creamos un componente por medio de una funcion, y devuelve un elemento//
  return (
    <div className="App"> {/*lo que retornamos es un elemento con la sintaxis JSX, se debe aclarar que no es html , por que no se puede escribir html en javascript */}
      <header className="App-header">{/*observemos que la clsase se identifica con la palabra reservada className */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; //exportamos el componente App
