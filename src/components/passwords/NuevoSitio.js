import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { nuevoSitio, startNuevoSitio } from '../../actions/sitios';
import { useForm } from '../../hooks/useForm';
import { errorUi, removeError } from '../../actions/ui';

export const NuevoSitio = () => {
    const dispatch = useDispatch();
    const { formularioSitio } = useSelector(state => state.sitios);
    const { error } = useSelector (state => state.ui);

    const [formValues, handleInputChange, reset] = useForm({
        name:''
    })

    const { name } = formValues;
    
    
    const agregarSitio = () => {
        dispatch( nuevoSitio() );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name.trim() === ''){
            dispatch(errorUi('El nombre del sitio no puede estar vacio'));
            return;
        }

        dispatch(removeError());
        dispatch(startNuevoSitio(name));
        
        reset();
        

    }

    return (
        <>

        { formularioSitio === null  ? ( <button
                type="button"
                className="btn btn-block btn-primario"
                onClick = { agregarSitio }
            >Nuevo Sitio</button> ) : (
                <form
                className="formulario-nuevo-sitio"
                onSubmit = { handleSubmit }
            >
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Nombre del Sitio"
                    name="name"
                    onChange={ handleInputChange }
                    value = { name }
                />
            
                {error && <div className="mensaje error">{ error } </div>}

                <input 
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar sitio"
                />

            </form>
            ) }
            

            
        </>
    )
}
