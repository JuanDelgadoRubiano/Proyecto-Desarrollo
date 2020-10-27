import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class AdicionarCategorias extends Component {


    state = {
    Categoria: '',
    descripcion: '',
    PrecioLabor: ''

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

            <div className="login-box2">
             <h1>TTT Restaurant</h1>
             <h2>Adicionar Categoria</h2>
             <form id= "formulario"onSubmit = {this.onSubmit}>
             {/*<!-- CATEGORIA -->*/}
            <label for="Categoria">Categoria:</label>
            <input type="text" placeholder="Ingrese nombre de Categoria" onChange={this.onChangeCategoria} />
             {/*<!-- ID-->*/}
            <label for="ID">ID:</label>
            <input type="text" placeholder="Ingrese ID de la Categoria" onChange={this.onChangeID} />

             {/*<!-- DESCRIPCION -->*/}
            <label className="descripcion" for="Descripcion de Categoria">Descripcion de Categoria :</label>
            <textarea name="textarea" rows="4" cols="50" onChange = {this.onChangeDescripcion}>Escribe la descripcion de la categoria aqui </textarea>
            <input type="submit" value="Adicionar Categoria" />                     
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


export default AdicionarCategorias;