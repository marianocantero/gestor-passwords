import React from 'react'
import { Sitio } from './Sitio'
import { useSelector } from 'react-redux'

export const ListadoSitios = () => {

    const { sitios } = useSelector(state => state.sitios);
    
    
    return (
        <ul className="listado-sitios animate__animated animate__fadeIn animate__faster ">
            {sitios.map(sitio => (
                <Sitio 
                    className="animate__animated animate__fadeIn animate__faster"
                    key={sitio.id}
                    sitio={sitio}
                />
            ))}
        </ul>
    )
}
