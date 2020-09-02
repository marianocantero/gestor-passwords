import React from 'react'
import { Sidebar } from '../layout/Sidebar'
import { Header } from '../layout/Header'
import { useSelector } from 'react-redux';
import { FormSitios } from './FormSitios';

export const MainScreen = () => {

    const { sitioActual } = useSelector(state => state.sitios)
 
    

    return (
        <div className="contenedor-app animate__animated animate__fadeIn animate__faster">
            <Sidebar />

            <div className="seccion-principal">

                <Header />

                <main>
                {(sitioActual === null) ? <h1>No hay un sitio seleccionado</h1> : (<FormSitios />)}
                    
                    
                    <div className="contenedor-sitios">
                    </div>
                </main>
            </div>
        </div>
    )
}
