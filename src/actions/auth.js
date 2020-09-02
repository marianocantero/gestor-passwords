import { types } from '../types/types';
import { firebase } from '../firebase/firebase-config';
import Swal from 'sweetalert2'
import { sitiosLogout } from './sitios';


export const startLoginEmailPassword = ( email, password ) =>{
    return(dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            dispatch(login(user.uid, user.displayName));
        })
        .catch(e => {
            console.log('Por favor ingrese un email valido');
            Swal.fire('Error', 'No hay credenciales con el usuario que esta ingresando', 'error');
        })
    }
}


export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid, 
        displayName
    }
})



export const startRegisterNameEmailPassword = ( name, email, password ) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async ({user}) => {
            await user.updateProfile({displayName: name})
            dispatch(login(user.uid, user.displayName))
        })
        .catch(e => {
            console.log('Por favor ingrese un email valido');
            Swal.fire('Error', 'El usuario ya esta registrado o no es un email valido', 'error');
        })

    }
}

export const startLogout = () => {
    return( dispatch ) => {
        firebase.auth().signOut();

        dispatch(logout())
        dispatch(sitiosLogout())
    }
}

export const logout = () => ({
    type: types.logout
})