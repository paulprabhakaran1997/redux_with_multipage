import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

export const MainReducer = combineReducers({
    UserReducer : UserReducer
})