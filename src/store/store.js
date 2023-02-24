import { createStore, combineReducers } from "redux"
import CreateEmployeeReducer from "./createEmployeeState"


const reducer = combineReducers({
    createEmployee: CreateEmployeeReducer,
})


export const store = createStore(reducer)

