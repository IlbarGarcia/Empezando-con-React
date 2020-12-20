import Curso from './Tarjeta'
import logo from './logo.svg';//importammos una imagen la cual se encentra en la misma carpeta
import './App.css'; //aqui importamos el estilo para este elemento el cual se encuentra dentro de la misma carpeta
 //creamos un array de objetos//
 const cursos=[
   {
    nombre:'Ilbar',
    apellido:'Garcia'
   },
   {
    nombre:'Erika',
    apellido:'Castro'
   },
   {
    nombre:'Argemiro',
    apellido:'Gomez' 
   },
   {
    nombre:'Omar',
    apellido:'Perez' 
   },
   {
    nombre:'Jhon',
    apellido:'Viafara' 
   }]
 const App= () => (
    <div>
    {
      //usamos el metodo .map para recorrer el array y para cada objeto se crea un componente Curso , y le pasamos como parametro el atributo de cada objeto  
      cursos.map(a=> <Curso apellido={a.apellido} nombre={a.nombre} />)
    }  
    </div>
  );


export default App; //exportamos el componente App
