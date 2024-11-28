import { api } from "./base/api"

export const apiPostUser = (userObj) => new Promise((resolve , reject) =>{
    api({
        method : 'POST',
        url : '/users',
        data : userObj
    }).then((res) =>{
        !res.error ? resolve(res.status) : resolve(404)
    }).catch((error) =>{
        resolve(error.response.status)
    })
})