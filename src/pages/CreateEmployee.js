import { Link } from 'react-router-dom'
import { CreateEmployeeForm } from '../components/CreateEmployeeForm/CreateEmployeeForm'
import TestComponent  from '../components/Test/TestComponent'

import './CreateEmployee.css'

export function CreateEmployee() {
    return (
        <div>
            <div className="header">
                <h1>HRnet</h1>
                <Link to={`/current-employees`}>View Current Employees</Link>
            </div>
            <CreateEmployeeForm />
            <TestComponent />
        </div>
    )
}