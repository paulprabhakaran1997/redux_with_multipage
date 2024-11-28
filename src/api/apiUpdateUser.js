import { api } from "./base/api"

export const apiUpdateUser = (id , userObj) => new Promise((resolve , reject) =>{
    api({
        method : 'PUT',
        url : '/users/'+id,
        data : userObj
    }).then((res) =>{
        !res.error ? resolve(res.status) : resolve(404)
    }).catch((error) =>{
        resolve(error.response.status)
    })
}) 