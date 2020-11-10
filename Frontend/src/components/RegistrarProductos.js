import React,{Component, Fragment} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';




class RegistroProductos extends Component{

    state = {
     nombre: '',
     Codigo: '',
     precio: '',
     Descuento: '',
     Categoria: '',
     Dispoinibilidad: '',
     Descripcion: '',

     selectedFile: null
    }

    onChangeNombre = (e) => {
     this.setState({nombre: e.target.value})
    }
    onChangeCodigo = (e) => {
      this.setState({Codigo: e.target.value})
    }
    onChangePrecio = (e) => {
      this.setState({precio: e.target.value})
    }

    onChangeDescuento = (e) => {
      this.setState({Descuento: e.target.value})
    }

    onChangeCategoria = (e) => {
      this.setState({Categoria: e.target.value})
    }
    onChangeDisponibilidad = (e) => {
      this.setState({Dispoinibilidad: e.target.value})
    }
    onChangeDescripcion = (e) => {
      this.setState({Descripcion: e.target.value})
    }

    onChangeFoto = (e) => {
        this.setState({
        selectedFile: e.target.files[0],
        loaded: 0,
      })
    }

    onSubmit = async e => {
      e.preventDefault();
      var dispo = true;
      if (this.state.Dispoinibilidad === "Nodisponible"){
         dispo = false;
      }
      else {
        if (this.state.Dispoinibilidad === "Disponible"){
          dispo = true;
        }
      }    
       const respuesta = await axios.post('http://localhost:4000/productos', {"categoria": this.state.Categoria,
        "nombre": this.state.nombre,
        "imagen": "Olis",
       "descripcion": this.state.Descripcion,
        "descuentos": this.state.Descuento,
        "detalles" : "nanananan Batmaaaann",
        "precio" : this.state.precio,
       "disponibilidad": dispo,
       "iva": 16})
        console.log(respuesta);
        const data = new FormData();
        data.append('file', this.state.selectedFile);
        
        if(this.state.nombreUsuario === '' | 
           this.state.password === '' |
           this.state.telefono === '' |
           this.state.direccion === '' |
           this.state.email === '' |
           this.state.noTarjeta === '' ){console.log("1")
           }
           else{
            document.location.href = "http://localhost:3000/Registro_Productos";
           }
    }

    render(){

        return(
         <Fragment>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap" rel="stylesheet"></link>

            <div class="sign-box3">
            <h1>TTT restaurant</h1>
            <h2>Registro Productos</h2> 
            
            <form class="formulario" onSubmit={this.onSubmit} >
              {/*<!-- NOMBRE -->*/}
              <label for="Nombre del Producto">Nombre del Producto:</label>
              <input type="text" placeholder="Ingrese Nombre del Producto" onChange={this.onChangeNombre} />
               {/*<!-- CODIGO PRODUCTO -->*/}
              <label for="Codigo Producto">Codigo Producto:</label>
              <input type="text" placeholder="Ingrese el Codigo del Producto" onChange={this.onChangeCodigo}/>
              {/*<!-- PRECIO -->*/}
              <label for="Precio">Precio:</label>
              <input type="text" placeholder="Ingrese el Precio"  onChange={this.onChangePrecio}/>
               {/*<!-- DESCUENTO -->*/}
              <label for="Descuento">Descuento:</label>
              <input type="text" placeholder="Ingrese El descuento actual del producto" onChange={this.onChangeDescuento}/>
              {/*<!-- CATEGORIA -->*/}
              <label for="Categoria">Categoria:</label>
              <input type="text" placeholder="Ingrese La categoria del producto" onChange={this.onChangeCategoria}/>
               {/*<!-- DISPONIBILIDAD -->*/}
              <label for="Disponibilidad">Disponibilidad:</label>
              <input type="text" placeholder="Se encuentra disponible el producto?"onChange={this.onChangeDisponibilidad} />
              
               {/*<!-- DESCRIPCION -->*/}
              <label className="descripcion" for="Descripcion de Producto">Descripcion de Producto :</label>
             <textarea name="textarea" rows="4" cols="30" onChange = {this.onChangeDescripcion} >Escribe la descripcion de la categoria aqui </textarea>
               {/*<!-- FOTO -->*/}
               <label for="Foto Prodcuto">Foto Producto:</label>
              <input type="file" placeholder="Ingrese foto del producto" accept=".jpg , .png" onChange={this.onChangeFoto}/>

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

export default RegistroProductos;
