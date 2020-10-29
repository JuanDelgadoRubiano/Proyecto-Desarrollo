import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import AdministrarUsuario from './AdministrarUsuario';

class AdministrarCategorias extends Component {


    state = {
    ID: '',
    Categoria: '',
    descripcion: '',
    categoriaActual: []

    }

    onChangeID = (e) => {
    this.setState({ID: e.target.value})
        }

    onChangeCategoria = (e) => {
    this.setState({Categoria: e.target.value})
    }

    onChangeDescripcion= (e) => {
        this.setState({descripcion: e.target.value});
       }
    
    onSubmitConsulta = async e => {
        e.preventDefault();
        const res = await axios.get('http://localhost:4000/categorias/' + this.state.ID );
        await this.setState({categoriaActual: res.data[0]});
        console.log(res);
        this.setState({Categoria: this.state.categoriaActual.nombre });
        this.setState({descripcion: this.state.categoriaActual.descripcion});
     

        console.log("AQUI ESTOYYYYYYY");
        console.log(this.state.Categoria);
        console.log(this.state.descripcion);
       
  
      }

    onSubmit = async e => {

        e.preventDefault();
        const respuesta = await axios.post('http://localhost:4000/categorias/update', 
        {"nombre": this.state.Categoria,
	    "codigo": this.state.categoriaActual.codigo,
        "descripcion": this.state.descripcion})
        
    }

    onSubmitBorrar = async e => {
        e.preventDefault();
        const respuesta = await axios.delete('http://localhost:4000/categorias/' + this.state.ID )
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
            <input type="text" placeholder="Aqui va el nombre de la categoria" onChange={this.onChangeCategoria} defaultValue = {this.state.categoriaActual.nombre} />

             {/*<!-- DESCRIPCION -->*/}
            <label className="descripcion" for="Descripcion de Categoria">Descripcion de Categoria :</label>
            <textarea name="textarea" rows="4" cols="50" onChange = {this.onChangeDescripcion} defaultValue = {this.state.categoriaActual.descripcion}>Escribe la descripcion de la categoria aqui </textarea>
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