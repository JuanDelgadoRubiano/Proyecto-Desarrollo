import React, { Fragment } from 'react';
import logo from './assets/images/logo.svg';
//import './assets/css/App.css';
import './assets/css/styles.css';
import glo from './components/glo.js';

//Importar componentes


import Header from './components/Header';
import Rutas from './Rutas';
import LoginUsuario from './components/LoginUsuario';


function App() {
  return (

    <Fragment>


    <div className="App">


    <Rutas />

    {/*<LoginUsuario />*/}

    <header className="App-header">

    </header>
    </div>

    </Fragment>




  );
}

export default App;
