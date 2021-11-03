import {http} from './../.services/api.js'

export default {
    listar:() => {
        return http.get('produtos')
    },
    salvar:(anuncio)=>{
        return http.post('anuncio',anuncio)
    },
    apagar:(anuncio) =>{
        return http.delete('anuncio',{ data: anuncio})
    }
}