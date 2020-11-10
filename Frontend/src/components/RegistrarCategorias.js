import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

class AdicionarCategorias extends Component {


    state = {
    Categoria: '',
    descripcion: ''

    }


    onChangeCategoria = (e) => {
        this.setState({Categoria: e.target.value})
    }
   

    onChangeDescripcion= (e) => {
        this.setState({descripcion: e.target.value});
       }

    onSubmit = async e => {

        e.preventDefault();
        const respuesta = await axios.post('http://localhost:4000/categorias', 
        {"nombre": this.state.Categoria,
        "descripcion": this.state.descripcion})

        if(this.state.Categoria === '' | 
        this.state.descripcion === '' 
        ){console.log("1")
        }
        else{
         document.location.href = "http://localhost:3000/Adicionar_Categorias";
        }
        
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
             {/*<!-- DESCRIPCION -->*/}
            <label className="descripcion" for="Descripcion de Categoria">Descripcion de Categoria :</label>
            <textarea name="textarea" rows="4" cols="50" onChange = {this.onChangeDescripcion}>Escribe la descripcion de la categoria aqui </textarea>
            <input type="submit" value="Adicionar Categoria" />                     
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


export default AdicionarCategorias;