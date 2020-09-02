import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';


export const Header = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth)

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <div>
            <header className="app-header">
                <p className="nombre-usuario">Hola <span>{ name }</span></p>

                <nav className="nav-principal">
                    <a href="#!" onClick={ handleLogout }>Cerrar Sesión</a>
                </nav>
            </header>
        </div>
    )
}
