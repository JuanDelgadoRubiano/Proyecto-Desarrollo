import React,{Component, Fragment} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';




class RegistroClientes extends Component{

    state = {
     nombreUsuario: '',
     documento: '',
     telefono: '',
     direccion: '',
     fechaNacimiento: '',
     cumpleaños: ''
    }

    onChangeUsuario = (e) => {
     this.setState({nombreUsuario: e.target.value})
    }
    onChangeDocumento = (e) => {
      this.setState({documento: e.target.value})
    }
    onChangeTelefono = (e) => {
      this.setState({telefono: e.target.value})
    }

    onChangeDireccion = (e) => {
      this.setState({direccion: e.target.value})
    }

    onChangeNacimiento = (e) => {
      this.setState({fechaNacimiento: e.target.value})
    }

    onChangeCumpleaños = (e) => {
      this.setState({cumpleaños: e.target.value})
    }


    onSubmit = async e => {
      e.preventDefault();
      const respuesta = await axios.post('http://localhost:4000/clientes', {"nombre": this.state.nombreUsuario,
      "documento": this.state.documento,
      "telefono": this.state.telefono,
      "direccion": this.state.direccion,
      "dia": this.state.cumpleaños,
      "fecha" : this.state.fechaNacimiento})
      console.log(respuesta);
      const data = new FormData();
      data.append('file', this.state.selectedFile);
      
      
      if(this.state.nombreUsuario === '' | 
         this.state.documento === '' |
         this.state.telefono === '' |
         this.state.direccion === '' |
         this.state.cumpleaños === '' |
         this.state.fechaNacimiento === ''){console.log("1")
         }
         else{
          document.location.href = "http://localhost:3000/Registro_Clientes";
         }
    }

    render(){

        return(
         <Fragment>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap" rel="stylesheet"></link>

        
            <div class="sign-box11">
            <h1>TTT restaurant</h1>
            <h2>Registro Clientes</h2> 
            
            <form class="formulario" onSubmit={this.onSubmit} >
              {/*<!-- NOMBRE -->*/}
              <label for="Nombre">Nombre:</label>
              <input type="text" placeholder="Ingrese Nombre de Usuario" onChange={this.onChangeUsuario} />
               {/*<!-- DOCUMENTO -->*/}
              <label for="Documento">Documento:</label>
              <input type="text" placeholder="Ingrese el Numero del Documento" onChange={this.onChangeDocumento}/>
              {/*<!-- TELEFONO-->*/}
              <label for="Telefono">Telefono:</label>
              <input type="text" placeholder="Ingrese el Numero de telefono"  onChange={this.onChangeTelefono}/>
               {/*<!-- DIRECCION -->*/}
              <label for="Direccion">Direccion:</label>
              <input type="text" placeholder="Ingrese la direccion" onChange={this.onChangeDireccion}/>
              {/*<!-- FECHA NACIMIENTO -->*/}
              <label for="Fecha Nacimiento">Fecha Nacimiento:</label>
              <input type="text" placeholder="Ingrese la fecha de Nacimiento" onChange={this.onChangeNacimiento}/>
               {/*<!-- CUMPLEAÑOS -->*/}
              <label for="Cumpleaños">Cumpleaños:</label>
              <input type="text" placeholder="Ingrese el dia de cumpleaños"onChange={this.onChangeCumpleaños} />
              <input class="Registrar" type="submit" value="Registrar" id="boton"/>
              <a href="#">Ayuda??</a><br />
            </form>
          </div>
          </Fragment>

        );


    }
}


export default RegistroClientes;
