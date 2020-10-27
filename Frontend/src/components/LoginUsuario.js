import React, { Component } from 'react';
import avatar from '../assets/images/mande.jpg';
import { Link } from 'react-router-dom';

class LoginUsuario extends Component {

    

    render() {

        return (

            //<body>
            <div className="login-box">

                <img src={avatar} className="avatar" alt="Avatar Image" />
                <h1>Login de Usuarios</h1>
                <form>
                    {/*USERNAME INPUT*/}
                    <label for="Nombre de Usuario">Nombre de Usuario</label>
                    <input type="text" placeholder="Ingrese el Nombre de Usuario" />
                    {/*PASSWORD INPUT*/}
                    <label for="Contraseña">Contraseña</label>
                    <input type="password" placeholder="Ingrese la Contraseña" />
                    <Link className="nav-link" to={"/Usuario"}>
                        <input type="submit" value="Log In" />
                    </Link>
                    <a href="#">Has Olvidado tu contraseña??</a><br />
                    <a href="#">No te has registrado aun?</a>
                </form>

            </div>
            
            //</body>


        );



    }


}

export default LoginUsuario;