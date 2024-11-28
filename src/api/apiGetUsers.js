import { addUser } from "../redux/reducers/UserReducer";
import { api } from "./base/api"

export const apiGetUsers = (dispatch) =>{
    api({
        method : 'GET',
        url : '/users'
    }).then((res) =>{
        dispatch(addUser(res.data))
    }).catch((err) =>{
        console.log(err.message);
    })
}