import React,{Component, Fragment} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class AdministrarUsuario extends Component{

    
    state = {
        nombreTrabajador: '',
        password: '',
        telefono: '',
        direccion: '',
        email: '',
        noTarjeta: ''
    }

      onChangeNombre = (e) => {
        this.setState({nombreTrabajador: e.target.value})
       }
       onChangeContraseña = (e) => {
         this.setState({password: e.target.value})
       }
   
       onChangeDireccion = (e) => {
         this.setState({direccion: e.target.value})
       }
   
       onChangeTelefono = (e) => {
         this.setState({telefono: e.target.value})
       }
   
       onChangeEmail = (e) => {
         this.setState({email: e.target.value})
       }
   
       onChangeTarjeta = (e) => {
         this.setState({noTarjeta: e.target.value})
       }


       onSubmit = async e => {
        e.preventDefault();
        const respuesta = await axios.post('http://localhost:4000/cuenta/creart', {"telefono": this.state.telefono,
        "pass": this.state.password,
        "email": this.state.email,
        "tipo": "t",
        "cc": 11111111,
        "name": this.state.nombreTrabajador,
        "estrellas" : 4.5,
        "disponible" : true,
        "perfil": "/casita",
        "documento": "/casita2",
        "direccion": "ST_GeomFromText('POINT(-0.1257 51.508)',4326)"})
         console.log(respuesta);

         if(this.state.nombreTrabajador === '' | 
         this.state.password === '' |
         this.state.telefono === '' |
         this.state.direccion === '' |
         this.state.email === '' |
         this.state.noTarjeta === ''){console.log("1")
           }
           else{
            document.location.href = "http://localhost:3000/Trabajador";
           }
     }
     
    render(){

        return(
            <Fragment>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap" rel="stylesheet"></link>

            <div className="sign-box4">
                <h1>TTT Restaurant</h1>
                <h2>Administrar Usuarios</h2>

                <Link className="nav-link" to={"/"} >
               <button className="btn"><i className="fa fa-home"></i></button>
               </Link>
            <form class = "consulta" onSubmit = {this.onSubmitConsulta}>
               {/*<!-- CONSULTAR USUARIO POR ID -->*/}
              <label for="ID">ID:</label>
              <input type="text" placeholder="Ingrese el id" onChange={this.onChangeID} /> 
              <input class="Buscar" type="submit" value="Buscar"  />
            </form> 
            <form class="formulario" onSubmit={this.onSubmit}>
               {/*<!-- NOMBRE -->*/}
              <label for="Nombre">Nombre:</label>
              <input type="text" placeholder="Aqui se genera el nombre" onChange={this.onChangeUsuario} />
               {/*<!-- Nombre Corto -->*/}
              <label for="Nombre Corto">Nombre Corto:</label>
              <input type="text" placeholder="Aqui se genera el nombre corto" onChange={this.onChangeNombreCorto}/>
              
               {/*<!-- EMAIL -->*/}
              <label for="Email">Email:</label>
              <input type="text" placeholder="Aqui se genera el email" onChange={this.onChangeEmail}/>
               {/*<!-- ROL -->*/}
              <label for="Rol">Rol:</label>
              <input type="text" placeholder="Aqui se genera el Rol del usuario"onChange={this.onChangeRol} />
        
            <input class="Guardar" type="submit" value="Guardar"  />
            </form>
            <form class = "eliminar" onSubmit = {this.onSubmitBorrar}>
            <input class="Eliminar Usuario" type="submit" value="Eliminar Usuario"  />
            </form>
        </div>
        </Fragment>

        );

       

    }



}

export default AdministrarUsuario;