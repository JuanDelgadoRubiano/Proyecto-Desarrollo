import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import AdministrarUsuario from './AdministrarUsuario';

class AdministrarCategorias extends Component {


    state = {
    Categoria: '',
    descripcion: '',
    PrecioLabor: '',
    categoriaActual: []

    }


    onChangeCategoria = (e) => {
    this.setState({Categoria: e.target.value})
    }
   

    onChangePrecio= (e) => {
     this.setState({PrecioLabor: e.target.value});
    }

    onChangeDescripcion= (e) => {
        this.setState({descripcion: e.target.value});
       }

    onSubmit = async e => {

        e.preventDefault();
        const respuesta = await axios.post('http://localhost:4000/trabajador/labor/crear', 
        {"telefono": 3106330913,
	    "labor": this.state.Labor,
	    "unidad": this.state.PrecioLabor,
        "descripcion": "Lo hare bn deveras"})
        
    }

    render() {

        return (

            <div className="login-box3">
             <h1>TTT Restaurant</h1>
             <h2>Administrar Categorias</h2>

            <form class = "consulta" onSubmit = {this.onSubmitConsulta}>
            {/*<!-- CONSULTAR CATEGORIA POR ID -->*/}
            <label for="ID">ID:</label>
            <input type="text" placeholder="Ingrese el id" onChange={this.onChangeID} /> 
            <input class="Buscar" type="submit" value="Buscar"  />
            </form> 
             <form id= "formulario"onSubmit = {this.onSubmit}>
             {/*<!-- CATEGORIA -->*/}
            <label for="Categoria">Categoria:</label>
            <input type="text" placeholder="Aqui va el nombre de la categoria" onChange={this.onChangeCategoria} value = {this.state.categoriaActual.nombre} />

             {/*<!-- DESCRIPCION -->*/}
            <label className="descripcion" for="Descripcion de Categoria">Descripcion de Categoria :</label>
            <textarea name="textarea" rows="4" cols="50" onChange = {this.onChangeDescripcion} value = {this.state.categoriaActual.descripcion}>Escribe la descripcion de la categoria aqui </textarea>
            <input type="submit" value="Guardar" />                     
            </form>
            <form class = "eliminar" onSubmit = {this.onSubmitBorrar}>
            <input class="Categoria" type="submit" value="Eliminar Categoria"  />
            </form>
            <form>
            <Link className="nav-link" to={"/Trabajador"} >
            <input type="submit" value="Finalizar" /> <br />
            </Link>
            <a href="#">Ayuda?</a>
            </form>
          </div>
        );



    }



}


export default AdministrarCategorias;