import './Modal.css'
import { useDispatch } from "react-redux"


export function Modal ( {msg , toggle, state} ) {

    const dispatch = useDispatch()
    const isModalOpen = state

    if(isModalOpen) {
        return (
            <div className="modal-container">
                <div className="modal-background"></div>
                <div className="modal-message"><p>{msg}</p><i className="fa-solid fa-circle-xmark" onClick={() => dispatch(toggle)}></i></div>
            </div>
        )
    }
}