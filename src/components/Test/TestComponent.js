import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../store/modal";


export default function TestComponent() {
    
    const isModalOpen = useSelector((state) => state).modal.isModalOpen
    const state = useSelector((state) => state)
    const dispatch = useDispatch()    
    
    return <div>
        <button onClick={() => console.log(state, isModalOpen)}>Log State</button>
        <button onClick={() => dispatch(toggleModal())}>toggle modal</button>
    </div>
}