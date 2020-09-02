import { db } from "../firebase/firebase-config"


export const cargarSitios = async (uid) => {
    
    const sitiosSnap = await db.collection(`${uid}/app/sitios`).get();
    let sitios = [];
    
    sitiosSnap.forEach(snapHijo => {
        sitios.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })
    
    
    return sitios;
}