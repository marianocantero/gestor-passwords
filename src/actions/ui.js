import { types } from '../types/types';


export const errorUi = ( mensaje ) => ({
    type: types.error,
    payload: mensaje
})

export const removeError = ( ) => ({
    type: types.removeError
})