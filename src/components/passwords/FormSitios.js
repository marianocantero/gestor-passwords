import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { startGuardarSitio, startBorrarSitio } from '../../actions/sitios';
import { errorUi } from '../../actions/ui';

export const FormSitios = () => {

    const dispatch = useDispatch();

    

    const { sitioActual:{nombreSitio, email, password, username, id} } = useSelector(state => state.sitios)
    
    const { sitioActual } = useSelector(state => state.sitios);
    const {error} = useSelector(state => state.ui);

    const [valores, setValores] = useState({
        identificador: id,
        nombre:nombreSitio,
        correo: email,
        contrasenia: password,
        usuario: username
    })

    const {identificador, nombre, correo, contrasenia, usuario} = valores;
    

    const handleInputChange = e => {
       setValores({
           ...valores,
           [e.target.name] : e.target.value
       });
    }

    useEffect(() => {
        setValores({
            identificador: id,
            nombre:nombreSitio,
            correo: email,
            contrasenia: password,
            usuario: username
        })
    }, [sitioActual, email, id, nombreSitio, password, username])

    const handleSubmitSitio = e => {
        e.preventDefault();
        if(nombre.trim() === '' || contrasenia.trim() === ''
        || correo.trim() === '' || usuario.trim === ''){
            dispatch(errorUi('Todos los campos son obligatorios'))
        }
        dispatch(startGuardarSitio(valores));

    }

    const handleDelete = () => {
        dispatch(startBorrarSitio(identificador))
    }

    return (
        <div className="formulario animate__animated animate__fadeIn animate__faster"> 
            <form onSubmit={ handleSubmitSitio }>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre del sitio.."
                        name="nombre"
                        onChange = { handleInputChange }
                        value = { nombre }

                               
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de usuario"
                        name="usuario"
                        onChange = { handleInputChange }
                        value={ usuario }
                       
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="email"
                        className="input-text"
                        placeholder="Email"
                        name="correo"
                        onChange = { handleInputChange }
                        value = { correo }
                       
                        
                    />
                </div>
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="***********"
                        name="contrasenia"
                        onChange = { handleInputChange }
                        value={ contrasenia }
                        
                        
                    />
                </div>
                { (error) && <div className="mensaje error">{ error }</div>}
                <input 
                    type="submit"
                    className="btn btn-primario btn-block btn-submit"
                    value="Guardar"
                />
                <button
                    type="button"
                    className="btn btn-eliminar btn-block"
                    onClick = { handleDelete }
                >Eliminar Sitio &times;</button>
            </form>
        </div>
    )
}
