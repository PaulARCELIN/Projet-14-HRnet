import { useSelector } from "react-redux";


export default function TestComponent() {
    
    const state = useSelector((state) => state)
        
    return <div>
        <button onClick={() => console.log(state)}>Log State</button>
    </div>
}