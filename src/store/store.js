import { createStore, combineReducers } from "redux"
import CreateEmployeeReducer from "./createEmployeeState"
import SaveEmployeeReducer from "./employeeList"
import ModalReducer from "./modal"

const reducer = combineReducers({
    modal: ModalReducer,
    createEmployee: CreateEmployeeReducer,
    employeeList: SaveEmployeeReducer,
})


export const store = createStore(reducer)

