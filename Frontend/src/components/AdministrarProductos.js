import React,{Component, Fragment} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';




class AdministrarProductos extends Component{

    state = {
     ID: '',
     nombre: '',
     precio: '',
     descuento: '',
     disponibilidad: '',
     descripcion: '',
     selectedFile: null,
     productoActual: []
    }
    onChangeID = (e) => {
      this.setState({ID: e.target.value});
    }

    onChangeNombre = (e) => {
     this.setState({nombre: e.target.value})
    }
    onChangePrecio = (e) => {
      this.setState({precio: e.target.value})
    }
    onChangeDescuento = (e) => {
      this.setState({descuento: e.target.value})
    }

    onChangeDisponibilidad = (e) => {
      this.setState({disponibilidad: e.target.value})
    }

    onChangeDescripcion = (e) => {
      this.setState({descripcion: e.target.value})
    }

    onChangeFoto = (e) => {
        this.setState({
        selectedFile: e.target.files[0],
        loaded: 0,
      })
    }

    onSubmitConsulta = async e => {
      e.preventDefault();
      const res = await axios.get('http://localhost:4000/productos/cod/' + this.state.ID );
      await this.setState({productoActual: res.data[0]});
      console.log(res);
      this.setState({nombre: this.state.productoActual.nombre });
      this.setState({precio: this.state.productoActual.precio});
      this.setState({descuento: this.state.productoActual.descuentos });
      this.setState({disponibilidad: this.state.productoActual.disponibilidad });
      this.setState({descripcion: this.state.productoActual.descripcion });

    }

    onSubmit = async e => {

      e.preventDefault();
       const respuesta = await axios.post('http://localhost:4000/productos/update', {"categoria": this.state.productoActual.categoria,
        "nombre": this.state.nombre,
        "imagen": "Imagen",
       "descripcion": this.state.descripcion,
        "descuentos": this.state.descuento,
        "detalles" : "Descripcion",
        "precio" : this.state.precio,
       "disponibilidad": this.state.disponibilidad,
       "iva" : 16,
       "codigo": this.state.ID})
        
        if(this.state.nombre === '' | 
           this.state.descripcion === '' |
           this.state.descuento === '' |
           this.state.precio === '' |
           this.state.disponibilidad === ''){console.log("1")
           }
           else{
            document.location.href = "http://localhost:3000/Administrar_Productos";
           }
    }

    onSubmitBorrar = async e => {
      e.preventDefault();
      const respuesta = await axios.delete('http://localhost:4000/productos/' + this.state.ID )
    }

    render(){

        return(
         <Fragment>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&display=swap" rel="stylesheet"></link>

            <div class="sign-box5">
            <h1>TTT restaurant</h1>
            <h2>Administrar Productos</h2> 
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
              <input type="text" placeholder="Ingrese Nombre del Producto" onChange={this.onChangeNombre} defaultValue = {this.state.productoActual.nombre}/>
              {/*<!-- PRECIO -->*/}
              <label for="Precio">Precio:</label>
              <input type="text" placeholder="Ingrese el Precio"  onChange={this.onChangePrecio} defaultValue = {this.state.productoActual.precio}/>
               {/*<!-- DESCUENTO -->*/}
              <label for="Descuento">Descuento:</label>
              <input type="text" placeholder="Ingrese El descuento actual del producto" onChange={this.onChangeDescuento} defaultValue = {this.state.productoActual.descuentos}/>
               {/*<!-- DISPONIBILIDAD -->*/}
              <label for="Disponibilidad">Disponibilidad:</label>
              <input type="text" placeholder="Se encuentra disponible el producto?"onChange={this.onChangeDisponibilidad} defaultValue = {this.state.productoActual.disponibilidad}/>
               {/*<!-- DESCRIPCION -->*/}
              <label className="descripcion" for="Descripcion de Producto">Descripcion de Producto :</label>
             <textarea name="textarea" rows="4" cols="30" onChange = {this.onChangeDescripcion} defaultValue = {this.state.productoActual.descripcion}>Escribe la descripcion del producto </textarea>
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

 

export default AdministrarProductos;
