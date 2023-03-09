import { configureStore } from "@reduxjs/toolkit"
import { createStore, combineReducers } from "redux"
import CreateEmployeeReducer from "./createEmployeeState"
import ModalReducer from "./modal"

const reducer = combineReducers({
    modal: ModalReducer,
    createEmployee: CreateEmployeeReducer,
})


export const store = createStore(reducer)

/* export const store = configureStore({
    reducer: {
        modal: ModalReducer,
        createEmployee: CreateEmployeeReducer,
    }
}) */