import React,{Component, Fragment} from 'react';
import TipoRegistro from './TipoRegistro';
import axios from 'axios'
import { Link } from 'react-router-dom';




class RegistroUsuario extends Component{

    state = {
     nombreUsuario: '',
     nombreCorto: '',
     password: '',
     email: '',
     rol: '',
    }

    onChangeUsuario = (e) => {
     this.setState({nombreUsuario: e.target.value})
    }
    onChangeNombreCorto = (e) => {
      this.setState({nombreCorto: e.target.value})
    }
    onChangeContraseña = (e) => {
      this.setState({password: e.target.value})
    }

    onChangeEmail = (e) => {
      this.setState({email: e.target.value})
    }

    onChangeRol = (e) => {
      this.setState({rol: e.target.value})
    }


    onSubmit = async e => {

      e.preventDefault();
       const respuesta = await axios.post('http://localhost:4000/cuenta/crearu', {"telefono": this.state.telefono,
        "pass": this.state.password,
        "email": this.state.email,
       "tipo": "u",
        "name": this.state.nombreUsuario,
        "mpago" : "credito",
        "recibo" : "/lalalae",
       "direccion": "ST_GeomFromText('POINT(-0.1257 51.508)',4326)"})
        console.log(respuesta);
        const data = new FormData();
        data.append('file', this.state.selectedFile);
        const img = await axios.post("http://localhost:4000/upload", data, {
      // receive two    parameter endpoint url ,form data
        });
        console.log(img);
        
        if(this.state.nombreUsuario === '' | 
           this.state.password === '' |
           this.state.telefono === '' |
           this.state.direccion === '' |
           this.state.email === '' |
           this.state.noTarjeta === '' ){console.log("1")
           }
           else{
            document.location.href = "http://localhost:3000/Usuario";
           }
    }

    render(){

        return(
         <Fragment>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap" rel="stylesheet"></link>

            <div class="sign-box2">
            <h1>TTT restaurant</h1>
            <h2>Registro Usuario</h2> 
            <Link className="nav-link" to={"/"} >
            <button className="btn"><i className="fa fa-home"></i></button>
            </Link>
            
            <form class="formulario" onSubmit={this.onSubmit} encType="multipart/form-data" action="/ReciboServicios">
              {/*<!-- NOMBRE -->*/}
              <label for="Nombre">Nombre:</label>
              <input type="text" placeholder="Ingrese Nombre de Usuario" onChange={this.onChangeUsuario} />
               {/*<!-- Nombre Corto -->*/}
              <label for="Nombre Corto">Nombre Corto:</label>
              <input type="text" placeholder="Ingrese El nombre corto" onChange={this.onChangeNombreCorto}/>
              {/*<!-- CONTRASEÑA -->*/}
              <label for="Contraseña">Contraseña:</label>
              <input type="text" placeholder="Ingrese Contraseña"  onChange={this.onChangeContraseña}/>
               {/*<!-- EMAIL -->*/}
              <label for="Email">Email:</label>
              <input type="text" placeholder="Ingrese Email" onChange={this.onChangeEmail}/>
               {/*<!-- ROL -->*/}
              <label for="Rol">Rol:</label>
              <input type="text" placeholder="Ingrese el Rol del usuario"onChange={this.onChangeRol} />
              <input class="Registrar" type="submit" value="Registrar" id="boton"/>
              <a href="#">Ayuda??</a><br />
            </form>
          </div>
          </Fragment>

        );


    }
}

    const button = document.getElementById('boton')
    if(button){
    button.addEventListener('click', axios.post('http://localhost:4000/cuenta/crearu', {"telefono": this.state.telefono,
    "pass": this.state.password,
    "email": this.state.email,
    "tipo": "u",
    "name": this.state.nombreUsuario,
    "mpago" : "credito",
    "recibo" : "/lalalae",
    "direccion": "ST_GeomFromText('POINT(-0.1257 51.508)',4326)"}));}

export default RegistroUsuario;
