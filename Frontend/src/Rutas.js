import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import LoginUsuario from './components/LoginUsuario';
import RegistroUsuario from './components/RegistroUsuario';
import RegistroTrabajador from './components/RegistroTrabajador';
import AdicionarLabores from './components/AdicionarLabores';
import AppUsuario from './components/AppUsuario';
import AppTrabajador from './components/AppTrabajador';
import TipoRegistro from './components/TipoRegistro';
import LaborActualTrabajador from './components/LaborActualTrabajador';
import ServicioActualUsuario from './components/ServicioActualUsuario';
import Calificar from './components/Calificar';
import Error from './components/Error';
import Inicio from './components/Inicio';
import MapaTrabajador from './components/MapaTrabajador';

class Rutas extends Component {

    render() {

        return (

            <BrowserRouter>
              <Switch>

                <Route exact path= "/" component= {Inicio} />
                <Route exact path= "/Tipo_Registro" component= {TipoRegistro} />
                <Route exact path= "/Login_Usuario" component= {LoginUsuario} />
                <Route exact path= "/Registro_Usuario" component= {RegistroUsuario} />
                <Route exact path= "/Registro_Trabajador" component= {RegistroTrabajador} />
                <Route exact path= "/Adicionar_Labores" component= {AdicionarLabores} />
                <Route exact path= "/Usuario" component= {AppUsuario} />
                <Route exact path= "/Trabajador" component= {AppTrabajador} />
                <Route exact path= "/Labor_actual" component= {LaborActualTrabajador} />
                <Route exact path= "/Servicio_actual" component= {ServicioActualUsuario} />
                <Route exact path= "/Calificar" component= {Calificar} />
                <Route exact path= "/Mapa" component= {MapaTrabajador} />
                <Route component= {Error} />

              </Switch>

            </BrowserRouter>




        );



    }


}

export default Rutas;
