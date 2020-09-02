import React from 'react'
import { NuevoSitio } from '../passwords/NuevoSitio'
import { ListadoSitios } from '../passwords/ListadoSitios'


export const Sidebar = () => {

    

    return (
        <aside>
            <h1>Gestor de contraseñas</h1>

            
            <NuevoSitio />

            <div className="sitios">
                <h2>Tus sitios</h2>
                <ListadoSitios/>
            </div>
        </aside>
    )
}
