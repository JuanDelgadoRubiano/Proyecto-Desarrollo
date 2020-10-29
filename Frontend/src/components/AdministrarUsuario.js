import React,{Component, Fragment} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class AdministrarUsuario extends Component{


     state = {
        ID: '',
        contraseña: '',
        usuario: '',
        corto:'',
        Rol: '',  
        email: '',
        
        usuarioActual: []

    }
      onChangeID = (e) => {
        this.setState({ID: e.target.value});
      }
    
 
      onChangeUsuario = (e) => {
        this.setState({usuario: e.target.value});
       }
       onChangeNombreCorto = (e) => {
         this.setState({corto: e.target.value})
       }

       onChangeContraseña = (e) => {
         this.setState({contraseña: e.target.value});
       }
   
       onChangeRol = (e) => {
         this.setState({Rol: e.target.value})
       }
   
       onChangeEmail = (e) => {
         this.setState({email: e.target.value})
       }
   
      
       onSubmitConsulta = async e => {
         e.preventDefault();
         const res = await axios.get('http://localhost:4000/usuarios/' + this.state.ID );
         await this.setState({usuarioActual: res.data[0]});
         console.log(res);
         this.setState({usuario: this.state.usuarioActual.nombre });
         this.setState({corto: this.state.usuarioActual.nombrec});
         this.setState({Rol: this.state.usuarioActual.rol });

         console.log("AQUI ESTOYYYYYYY");
         console.log(this.state.usuario);
       }


       onSubmit = async e => {
        e.preventDefault();
        const respuesta = await axios.post('http://localhost:4000/usuarios/update', {"nombre": this.state.usuario,
        "nombrec": this.state.corto,
        "contraseña": this.state.contraseña,
        "correo": this.state.ID,
        "rol" : this.state.Rol})
         
         console.log(respuesta);
         console.log(this.state.usuario);
         console.log(this.state.corto);
         console.log(this.state.contraseña);
         console.log(this.state.Rol);
        
         if(this.state.usuario === '' | 
         this.state.corto === '' |
         this.state.contraseña === '' |
         this.state.Rol === ''  ){console.log("1")
         }
         else{
          document.location.href = "http://localhost:3000/Administrar_Usuario";
         }
      
     }

     onSubmitBorrar = async e => {
       e.preventDefault();
       const respuesta = await axios.delete('http://localhost:4000/usuarios/Cor/' + this.state.ID )
     }
     
    render(){

        return(
            <Fragment>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap" rel="stylesheet"></link>

            <div className="sign-box4">
                <h1>TTT Restaurant</h1>
                <h2>Administrar Usuarios</h2>
            <form class = "consulta" onSubmit = {this.onSubmitConsulta}>
               {/*<!-- CONSULTAR USUARIO POR ID -->*/}
              <label for="ID">ID:</label>
              <input type="text" placeholder="Ingrese el id" onChange={this.onChangeID} /> 
              <input class="Buscar" type="submit" value="Buscar"  />
            </form> 
            <form class="formulario" onSubmit={this.onSubmit}>
               {/*<!-- NOMBRE -->*/}
              <label for="Nombre">Nombre:</label>
              <input type="text" placeholder="Hola ke ase" onChange={this.onChangeUsuario} defaultValue = {this.state.usuarioActual.nombre}/>
               {/*<!-- Nombre Corto -->*/}
              <label for="Nombre Corto">Nombre Corto:</label>
              <input type="text" placeholder="Aqui se genera el nombre corto" onChange={this.onChangeNombreCorto} defaultValue = {this.state.usuarioActual.nombrec}/>
              {/*<!-- Contraseña -->*/}
              <label for="Contraseña">Contraseña:</label>
              <input type="text" placeholder="Aqui se genera la Contraseña" onChange={this.onChangeContraseña} defaultValue = {this.state.usuarioActual.contraseña}/>
               {/*<!-- ROL -->*/}
              <label for="Rol">Rol:</label>
              <input type="text" placeholder="Aqui se genera el Rol del usuario"onChange={this.onChangeRol} defaultValue = {this.state.usuarioActual.rol} />
        
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