import React from 'react';
import { useDispatch } from 'react-redux';
import { agregarSitioActual } from '../../actions/sitios';


export const Sitio = ({sitio}) => {

    const dispatch = useDispatch();

    

    const activarSitioActual = () => {
        dispatch(agregarSitioActual(sitio.id, sitio))
        
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick = { activarSitioActual }
            >
                {sitio.nombreSitio}
            </button>
        </li>
    )
}
