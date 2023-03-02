import { useSelector } from "react-redux"
import { toggleModal } from "../../store/modal"
import './Modal.css'
import { useDispatch } from "react-redux"


export function Modal ( {msg} ) {

    const dispatch = useDispatch()
    const isModalOpen = useSelector((state) => state).modal.isModalOpen

    if(isModalOpen) {
        return (
            <div className="modal-container">
                <div className="modal-background"></div>
                <div className="modal-message"><p>{msg}</p><i className="fa-solid fa-circle-xmark" onClick={() => dispatch(toggleModal())}></i></div>
            </div>
        )
    }
    
}