import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class RegistrarSede extends Component {


    state = {
    nombre: '',
    direccion: '',
    telefono: '',
    id: ''

    }


    onChangeNombre = (e) => {
        this.setState({nombre: e.target.value})
    }
   

    onChangeDireccion= (e) => {
        this.setState({direccion: e.target.value});
       }

    onChangeTelefono = (e) => {
        this.setState({telefono: e.target.value})
    }

    onChangeID = (e) => {
        this.setState({id: e.target.value})
    }

    onSubmit = async e => {

        e.preventDefault();
        const respuesta = await axios.post('http://localhost:4000/sedes', 
        {"nombre": this.state.nombre,
        "nit":"154.5578.545.5",
        "direccion": this.state.direccion,
        "telefono": this.state.telefono})

        if(this.state.nombre === '' | 
        this.state.id === '' | 
        this.state.direccion === '' | 
        this.state.telefono === '' 
        ){console.log("1")
        }
        else{
         document.location.href = "http://localhost:3000/Registrar_Sedes";
        }
        
    }

    render() {

        return (

            <div className="login-box7">
             <h1>TTT Restaurant</h1>
             <h2>Registrar Sedes</h2>
             <form id= "formulario"onSubmit = {this.onSubmit}>
             {/*<!-- NOMBRE -->*/}
            <label for="Nombre">Nombre:</label>
            <input type="text" placeholder="Ingrese nombre de la Sede" onChange={this.onChangeNombre} />
             {/*<!-- DIRECCION -->*/}
            <label for="Direccion">Direccion:</label>
            <input type="text" placeholder="Ingrese la direccion de la sede" onChange={this.onChangeDireccion} />
             {/*<!-- TELEFONO -->*/}
             <label for="Telefono">Telefono:</label>
            <input type="text" placeholder="Ingrese el telefono" onChange={this.onChangeTelefono} /> 
             {/*<!-- ID -->*/}
             <label for="ID">ID de Sede:</label>
            <input type="text" placeholder="Ingrese el ID" onChange={this.onChangeID} />           
            <input type="submit" value="Adicionar Sede" />                     
            </form>
            <form>
            <Link className="nav-link" to={"/"} >
            <input type="submit" value="Finalizar" /> <br />
            </Link>
            <a href="#">Ayuda?</a>
            </form>
          </div>
        );



    }



}


export default RegistrarSede;