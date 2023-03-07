import { createStore, combineReducers } from "redux"
import CreateEmployeeReducer from "./createEmployeeState"
import ModalReducer from "./modal"

const reducer = combineReducers({
    modal: ModalReducer,
    createEmployee: CreateEmployeeReducer,
})


export const store = createStore(reducer)

