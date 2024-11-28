import { configureStore } from "@reduxjs/toolkit";
import { MainReducer } from "../reducers/MainReducer";

const store = configureStore({
    reducer : MainReducer
});

export default store