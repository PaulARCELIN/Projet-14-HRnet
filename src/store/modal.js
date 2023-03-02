const initialState = {
    isModalOpen: false,
}

export const toggleModal = () => ({
    type: "toggleModal",
})

export default function ModalReducer(state = initialState, action) {
    if(action.type === "toggleModal") {
        return {
            ...state, 
            isModalOpen: !state.isModalOpen
        }
    }
    return state;
}