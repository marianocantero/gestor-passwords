import { types } from "../types/types";
import { db } from "../firebase/firebase-config";
import { cargarSitios } from "../helpers/cargarSitios";
import Swal from 'sweetalert2';


export const nuevoSitio = () => ({
    type: types.nuevoSitio
})

export const startNuevoSitio = (name) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        
        const nuevoSitio = {
            nombreSitio:name,
            email:'',
            username:'',
            password:''
        }

        const doc = await db.collection(`${ uid }/app/sitios`).add(nuevoSitio);
        dispatch( agregarSitioActual(doc.id, nuevoSitio) );
    }
}

export const agregarSitioActual = (id, sitio) => ({
    type: types.sitioActual,
    payload: {
        id,
        ...sitio
    }
})

export const startCargarSitios = (uid) => {
    return async (dispatch) => {
        
        const sitios = await cargarSitios(uid);
        dispatch(cargarSitiosMemoria(sitios));
    }
}

export const cargarSitiosMemoria = (sitios) => ({
    type: types.cargarSitios,
    payload: sitios
})

export const startGuardarSitio = ( sitio ) => {
    return async (dispatch, getState) => {
     const {uid} = getState().auth;
    
     const idSitio = sitio.identificador;
     const sitioAFirestore = {
         email: sitio.correo,
         nombreSitio: sitio.nombre,
         username: sitio.usuario,
         password: sitio.contrasenia
     }

     await db.doc(`${uid}/app/sitios/${idSitio}`).update(sitioAFirestore);
     dispatch(agregarSitioActual(idSitio, sitioAFirestore));
     //REFRESCAR EN LA LISTA DE NOTAS() GLOBALES CON UN FILTER
    dispatch(startCargarSitios(uid));
    Swal.fire('Sitio guardado!', '', 'success');
     
    }
}

export const startBorrarSitio = (id) =>{
    return async (dispatch, getState) => {
    
        const {uid} = getState().auth;
        await db.doc(`${uid}/app/sitios/${ id }`).delete()
        dispatch(borrarSitioMemoria(id));
        Swal.fire('Eliminado!', 'Sitio borrado', 'error');
    }
} 

const borrarSitioMemoria = (id) => ({
    type: types.sitioBorrar,
    payload: id
})

export const sitiosLogout = () =>  ({
    type: types.sitioLimpiar
})
