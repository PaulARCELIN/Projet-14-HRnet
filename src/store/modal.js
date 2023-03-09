const initialState = {
    isEmployeeCreatedModalOpen: false,
}

export const toggleEmployeeCreatedModal = () => ({
    type: "toggleEmployeeCreatedModal",
})

export default function ModalReducer(state = initialState, action) {
    if (state === undefined) {
        return false;
    }
    if(action.type === "toggleEmployeeCreatedModal") {
        return {
            ...state, 
            isEmployeeCreatedModalOpen: !state.isEmployeeCreatedModalOpen
        }
    }
    return state;
}