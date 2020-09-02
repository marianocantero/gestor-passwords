import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLoginEmailPassword } from '../../actions/auth';


export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleImputChange] = useForm({
        email:'',
        password: ''
        
    })

    const { email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
        
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>

                <form onSubmit = { handleLogin }
                      className="animate__animated animate__fadeIn animate__faster"
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            placeholder="correo@correo.com"
                            value= { email }
                            onChange = { handleImputChange }
                        />
                    </div>
                    
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password"
                            name="password"
                            id="password"
                            placeholder="***************"
                            value= { password }
                            onChange = { handleImputChange }
                        />
                    </div>

                    <div className="campo-form">
                    
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Iniciar Sesión"/>
                    </div>
                    <Link to ="/auth/register" className="enlace-cuenta">Crear una cuenta</Link>
                </form>
            </div>
        </div>
    )
}
