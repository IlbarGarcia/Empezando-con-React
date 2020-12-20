import './Tarjeta.css' //importamos el estilo que le vamos a dar a la tarjeta
const Curso =()=>{
 return( //creamos un componente que devuelve un elemento que nos permite crear una tarjeta  
    <div className="card-container">
      <div className="header">
        <a href="">
          <img src='https://lh3.googleusercontent.com/proxy/5OGshVCrnpBE37pP08458Tdjynee-qwT1CZXQzw9AaWCpTZzsLa55UBfXGri8nxbMKRn2K7r6zMvlxCVbomUqqR_WSGU6L0hbUf4Qk7oj9OUB7a_H-1VjSxaFd0ogdRqLTQC-fAK' alt=""/>
        </a>
        <h2>ILBAR GARCIA</h2>
        <h4>Desarrollador Web</h4>
      </div>
      <div className="desciption">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nisi aut cum, perferendis id vel repudiandae nihil, deleniti omnis assumenda voluptate doloremque illum harum sed inventore sunt ipsa quasi. Consequuntur.</p>
      </div>
    </div>  
 )
  

}
export default Curso; //exportamos el elemento que creamos