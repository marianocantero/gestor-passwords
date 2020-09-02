import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { errorUi, removeError } from '../../actions/ui';
import { startRegisterNameEmailPassword } from '../../actions/auth';
export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { error } = useSelector(state => state.ui);
   
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const {name, email, password, password2} = formValues;

    const handleRegister = e => {
        e.preventDefault();
        if(name.trim() === '' || email.trim() === '' || password.trim() === '' 
        || password2.trim() === ''){
            dispatch(errorUi('Todos los campos son obligatorios'))
            return;
        }

        if(password.length < 6){
            dispatch(errorUi('La contraseña debe tener al menos 6 caracteres'))
            return;
        }

        if(password !== password2){
            dispatch(errorUi('Las contraseñas deben coincidir'))
            return;
        }
        dispatch(removeError());
        dispatch(startRegisterNameEmailPassword(name, email, password ));
    }


    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Registrase </h1>

                {error && (<div className="mensaje error ">{error}</div>)}

                <form onSubmit = { handleRegister }
                      className="animate__animated animate__fadeIn animate__faster"
                >
                    <div className="campo-form">
                            <label htmlFor="name">Nombre</label>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Tu nombre"
                                value= { name }
                                onChange={ handleInputChange }
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            placeholder="correo@correo.com"
                            value = { email }
                            onChange={ handleInputChange }
                        />
                    </div>
                    
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password"
                            name="password"
                            id="password"
                            placeholder="***************"
                            value = { password }
                            onChange={ handleInputChange }
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirm">Confirmar contraseña</label>
                        <input 
                            type="password"
                            name="password2"
                            id="password2"
                            placeholder="***************"
                            value = { password2 }
                            onChange={ handleInputChange }
                        />
                    </div>

                    <div className="campo-form">
                    
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Iniciar Sesión"/>
                    </div>
                    <Link to ="/auth/login" className="enlace-cuenta">Ya tienes una cuenta?</Link>
                </form>
            </div>
        </div>
    )
}
