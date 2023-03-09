const initialState = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    addressState: '',
    zipCode: 0,
    department: '',
}

export const setFirstName = (firstName) => ({
    type: "setFirstName",
    payload: firstName,
})

export const setLastName = (lastName) => ({
    type: "setLastName",
    payload: lastName,
})

export const setDateOfBirth = (dateOfBirth) => ({
    type: "setDateOfBirth",
    payload: dateOfBirth,
})

export const setStartDate = (startDate) => ({
    type: "setStartDate",
    payload: startDate,
})

export const setStreet = (street) => ({
    type: "setStreet",
    payload: street,
})

export const setCity = (city) => ({
    type: "setCity",
    payload: city,
})

export const setAddressState = (addressState) => ({
    type: "setAddressState",
    payload: addressState,
})

export const setZipCode = (zipCode) => ({
    type: "setZipCode",
    payload: zipCode,
})

export const setDepartment = (department) => ({
    type: "setDepartment",
    payload: department,
})

export const resetProfil = () => ({
    type: "resetProfil",
})


export default function CreateEmployeeReducer(state = initialState, action) {
    if (state === undefined) {
        return false;
    }
    if(action.type === "setFirstName") {
        return {
            ...state, 
            firstName: state.firstName = action.payload
        }
    }
    if(action.type === "setLastName") {
        return {
            ...state, 
            lastName: state.lastName = action.payload
        }
    }
    if(action.type === "setDateOfBirth") {
        return {
            ...state, 
            dateOfBirth: state.dateOfBirth = action.payload
        }
    }
    if(action.type === "setStartDate") {
        return {
            ...state, 
            startDate: state.startDate = action.payload
        }
    }
    if(action.type === "setStreet") {
        return {
            ...state, 
            street: state.street = action.payload
        }
    }
    if(action.type === "setCity") {
        return {
            ...state, 
            city: state.city = action.payload
        }
    }
    if(action.type === "setAddressState") {
        return {
            ...state, 
            addressState: state.addressState = action.payload
        }
    }
    if(action.type === "setZipCode") {
        return {
            ...state, 
            zipCode: state.zipCode = action.payload
        }
    }
    if(action.type === "setDepartment") {
        return {
            ...state, 
            department: state.department = action.payload
        }
    }
    if(action.type === "resetProfil") {
        return {
            ...state,
            firstName: state.firstName = "",
            lastName: state.lastName = "",
            dateOfBirth: state.dateOfBirth = "",
            startDate: state.startDate = "",
            street: state.street = "",
            city: state.city = "",
            addressState: state.addressState = "",
            zipCode: state.zipCode = "", 
            department: state.department = "",
        }
    }
    return state;
}