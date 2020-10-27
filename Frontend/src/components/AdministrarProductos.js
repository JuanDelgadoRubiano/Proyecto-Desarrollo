import React,{Component, Fragment} from 'react';
import TipoRegistro from './TipoRegistro';
import axios from 'axios'
import { Link } from 'react-router-dom';




class AdministrarProductos extends Component{

    state = {
     nombreUsuario: '',
     nombreCorto: '',
     password: '',
     email: '',
     rol: '',
     selectedFile: null,
     productoActual: []
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

    onChangeFoto = (e) => {
        this.setState({
        selectedFile: e.target.files[0],
        loaded: 0,
      })
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

            <div class="sign-box5">
            <h1>TTT restaurant</h1>
            <h2>Administrar Productos</h2> 
            <Link className="nav-link" to={"/"} >
            <button className="btn"><i className="fa fa-home"></i></button>
            </Link>
            <form class = "consulta" onSubmit = {this.onSubmitConsulta}>
               {/*<!-- CONSULTAR PRODCUTO POR ID -->*/}
              <label for="ID">ID:</label>
              <input type="text" placeholder="Ingrese el id" onChange={this.onChangeID} /> 
              <input class="Buscar" type="submit" value="Buscar"  />
            </form> 
            <form class="formulario" onSubmit={this.onSubmit} >
              {/*<!-- FOTO -->*/}
              {/*<!-- NOMBRE -->*/}
              <label for="Nombre del Producto">Nombre del Producto:</label>
              <input type="text" placeholder="Ingrese Nombre del Producto" onChange={this.onChangeNombre} value = {this.state.productoActual.nombre}/>
              {/*<!-- PRECIO -->*/}
              <label for="Precio">Precio:</label>
              <input type="text" placeholder="Ingrese el Precio"  onChange={this.onChangePrecio} value = {this.state.productoActual.precio}/>
               {/*<!-- DESCUENTO -->*/}
              <label for="Descuento">Descuento:</label>
              <input type="text" placeholder="Ingrese El descuento actual del producto" onChange={this.onChangeDescuento} value = {this.state.productoActual.descuento}/>
               {/*<!-- DISPONIBILIDAD -->*/}
              <label for="Disponibilidad">Disponibilidad:</label>
              <input type="text" placeholder="Se encuentra disponible el producto?"onChange={this.onChangeDisponibilidad} value = {this.state.productoActual.disponibilidad}/>
              <input class="Registrar" type="submit" value="Registrar" id="boton"/>
               {/*<!-- DESCRIPCION -->*/}
              <label className="descripcion" for="Descripcion de Producto">Descripcion de Producto :</label>
             <textarea name="textarea" rows="4" cols="50" onChange = {this.onChangeDescripcion} value = {this.state.productoActual.descripcion}>Escribe la descripcion de la categoria aqui </textarea>
             <input class="Guardar" type="submit" value="Guardar"  />
            </form>
            <form class = "eliminar" onSubmit = {this.onSubmitBorrar}>
            <input class="Eliminar Producto" type="submit" value="Eliminar Producto"  />
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

export default AdministrarProductos;
