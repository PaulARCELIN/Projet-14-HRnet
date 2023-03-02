import { EmployeesList } from '../components/EmployeesList/EmployeesList'
import { Link } from 'react-router-dom'
import './CurrentEmployees.css'

export function CurrentEmployees() {
    return <div className='container'>
        <h1>Current Employees</h1>
        <EmployeesList />
        <Link to={`/create-employee`}>Home</Link>
    </div>
}