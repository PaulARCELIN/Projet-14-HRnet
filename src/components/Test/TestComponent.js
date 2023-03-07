import { useSelector, useDispatch } from "react-redux";
import { toggleEmployeeCreatedModal } from "../../store/modal";


export default function TestComponent() {
    
    const isModalOpen = useSelector((state) => state).modal.isModalOpen
    const state = useSelector((state) => state)
    const dispatch = useDispatch()    
    
    return <div>
        <button onClick={() => console.log(state, isModalOpen)}>Log State</button>
        <button onClick={() => dispatch(toggleEmployeeCreatedModal())}>toggle modal</button>
    </div>
}