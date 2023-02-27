const initialState = {
    list: [],
}

export const saveEmployee = (employee) => ({
    type: "saveEmployee",
    payload: employee,
})

export default function SaveEmployeeReducer(state = initialState, action) {
    if(action.type === "saveEmployee") {
        return {
            ...state, 
            list: state.list.push(action.payload)
        }
    }
    return state;
}