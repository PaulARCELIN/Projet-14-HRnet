import { createStore, combineReducers } from "redux"
import CreateEmployeeReducer from "./createEmployeeState"
import SaveEmployeeReducer from "./employeeList"

const reducer = combineReducers({
    createEmployee: CreateEmployeeReducer,
    employeeList: SaveEmployeeReducer,
})


export const store = createStore(reducer)

