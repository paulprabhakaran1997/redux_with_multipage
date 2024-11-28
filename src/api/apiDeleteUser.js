import { api } from "./base/api"

export const apiDeleteUser = (id) => new Promise((resolve , reject) =>{
    api({
        method : 'DELETE',
        url : '/users/'+id,
    }).then((res) =>{
        !res.error ? resolve(res.status) : resolve(404)
    }).catch((error) =>{
        resolve(error.response.status)
    })
}) 