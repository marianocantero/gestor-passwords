import { types } from '../types/types';

const initialState = {
    sitios: [],
    formularioSitio: null,
    sitioActual: null
}

export const sitiosReducer = (state= initialState , action) => {
    switch (action.type) {
        case types.nuevoSitio:
            return {
                ...state,
                formularioSitio: true
            }
        case types.sitioActual:
            return {
                ...state,
                sitioActual: action.payload,
                formularioSitio: null
            }
        case types.cargarSitios:
            return {
                ...state,
                sitios: [...action.payload]
            }
        case types.sitioBorrar:
            return {
                ...state,
                sitioActual: null,
                sitios: state.sitios.filter(sitio => sitio.id !== action.payload)
            }
        case types.sitioLimpiar:
            return {
                ...state,
                sitioActual:null,
                sitios:[],
            }
    
        default:
            return state;
    }
}