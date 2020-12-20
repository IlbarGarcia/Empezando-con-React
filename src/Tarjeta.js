import './Tarjeta.css' //importamos el estilo que le vamos a dar a la tarjeta//
import PropTypes from'prop-types' //importamos la libreria que instalamos 
const usuario ={nombre:"Ilbar",apellido:"Garcia",edad:30} //creamos un objeto usuario
const edadUsuario= edad => edad>33 //esta funcion recibe como parametro un numero , si este numero es mayor a 33 devuelve un true, sino un false
 


const Curso =({apellido,nombre})=> /*recibimos las propiedades y las desestructuramos para solo recibir apellido y nombre */
 ( //creamos un componente que devuelve un elemento que nos permite crear una tarjeta  
    <div className="card-container">
      <div className="header">
        <a href="">
          <img src='https://lh3.googleusercontent.com/proxy/i5OGshVCrnpBE37pP08458Tdjynee-qwT1CZXQzw9AaWCpTZzsLa55UBfXGri8nxbMKRn2K7r6zMvlxCVbomUqqR_WSGU6L0hbUf4Qk7oj9OUB7a_H-1VjSxaFd0ogdRqLTQC-fAK' alt=""/>
        </a>
        <h2>{`${nombre} ${apellido}`}</h2> {/*dentro de las llaves podemos escribir javascript puro, es decir podemos hacer referncia a una variable creada o a un obejto o a una funcion , cualquier cosa que sea javacript puro, dentro de las llaves recibimos el valor de nombre que recibimos como props  */}
        <h3>{edadUsuario(usuario.edad)?<h1>es mayor</h1>:<h3>es menor</h3>}</h3> {/*aqui dentro de las llaves llamamos la funcion, y utilizamos operadores ternarios para validar, ya que no podemos usar if observemos que en el opreador ternario podemos devolver un texto un elemento o un componente  */}
        <h4>Desarrollador Web</h4>
      </div>
      <div className="desciption">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi aut cum, perferendis id vel repudiandae nihil, deleniti omnis assumenda voluptate doloremque illum harum sed inventore sunt ipsa quasi. Consequuntur.</p>
      </div>
    </div>  
 )
  
Curso.propTypes ={ //decimos que tipo de dato va a recibir cada propiedad en este caso es string
  apellido:PropTypes.string,
  nombre:PropTypes.string
}
Curso.defaultProps={ //agregamos los valores por defecto que tendria el e;emento curso
  apellido: 'no se encontro un apellido valido', //este es el valor por defecto para apellido
  nombre: 'no se encontro un nombre valido' //este es el valor por defecto para nombre
}

export default Curso; //exportamos el elemento que creamos