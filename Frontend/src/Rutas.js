import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import LoginUsuario from './components/LoginUsuario';
import RegistroUsuario from './components/RegistroUsuario';
import RegistroProductos from './components/RegistrarProductos';
import AdicionarCategorias from './components/RegistrarCategorias';
import AdministrarUsuario from './components/AdministrarUsuario';
import AdministrarProductos from './components/AdministrarProductos';
import AdministrarCategorias from './components/AdministrarCategorias';
import RegistroClientes from './components/RegistrarClientes';
import RegistrarSede from './components/RegistrarSedes';
import Error from './components/Error';


class Rutas extends Component {

    render() {

        return (

            <BrowserRouter>
              <Switch>

                <Route exact path= "/Login_Usuario" component= {LoginUsuario} />
                <Route exact path= "/Registro_Usuario" component= {RegistroUsuario} />
                <Route exact path= "/Registro_Productos" component= {RegistroProductos} />
                <Route exact path= "/Registro_Clientes" component= {RegistroClientes} />
                <Route exact path= "/Registro_Categorias" component= {AdicionarCategorias} />
                <Route exact path= "/Registrar_Sedes" component= {RegistrarSede} />
                <Route exact path= "/Administrar_Usuario" component= {AdministrarUsuario} />
                <Route exact path= "/Administrar_Productos" component= {AdministrarProductos} />
                <Route exact path= "/Administrar_Categorias" component= {AdministrarCategorias} />
                <Route component= {Error} />

              </Switch>

            </BrowserRouter>




        );



    }


}

export default Rutas;
