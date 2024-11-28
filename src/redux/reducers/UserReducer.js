import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userlist : []
}

const UserReducer = createSlice({
    name : 'UserReducer',
    initialState,
    reducers : {
        addUser : (state , { type , payload }) =>{
            return {
                ...state,
                userlist : payload
            }
        }
    }
});

export const { addUser } = UserReducer.actions;

export default UserReducer.reducer