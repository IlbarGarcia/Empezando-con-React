import './Tarjeta.css' //importamos el estilo que le vamos a dar a la tarjeta
const usuario ={nombre:"Ilbar",apellido:"Garcia",edad:30} //creamos un objeto usuario
const edadUsuario= edad => edad>33 //esta funcion recibe como parametro un numero , si este numero es mayor a 33 devuelve un true, sino un false
 


const Curso =()=>{
 return( //creamos un componente que devuelve un elemento que nos permite crear una tarjeta  
    <div className="card-container">
      <div className="header">
        <a href="">
          <img src='https://lh3.googleusercontent.com/proxy/5OGshVCrnpBE37pP08458Tdjynee-qwT1CZXQzw9AaWCpTZzsLa55UBfXGri8nxbMKRn2K7r6zMvlxCVbomUqqR_WSGU6L0hbUf4Qk7oj9OUB7a_H-1VjSxaFd0ogdRqLTQC-fAK' alt=""/>
        </a>
        <h2>{`${usuario.nombre} ${usuario.apellido}`}</h2> {/*dentro de las llaves podemos escribir javascript puro, es decir podemos hacer referncia a una variable creada o a un obejto o a una funcion , cualquier cosa que sea javacript puro */}
        <h3>{edadUsuario(usuario.edad)?<h1>es mayor</h1>:<h3>es menor</h3>}</h3> {/*aqui dentro de las llaves llamamos la funcion, y utilizamos operadores ternarios para validar, ya que no podemos usar if observemos que en el opreador ternario podemos devolver un texto un elemento o un componente  */}
        <h4>Desarrollador Web</h4>
      </div>
      <div className="desciption">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi aut cum, perferendis id vel repudiandae nihil, deleniti omnis assumenda voluptate doloremque illum harum sed inventore sunt ipsa quasi. Consequuntur.</p>
      </div>
    </div>  
 )
  

}
export default Curso; //exportamos el elemento que creamos