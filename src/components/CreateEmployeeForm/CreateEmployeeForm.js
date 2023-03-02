import { Dropdown } from '../Dropdown/Dropdown'
import { STATES, DEPARTMENT } from '../../variables/stateList'
import './CreateEmployeeForm.css'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setFirstName, setLastName, setDateOfBirth, setStartDate, setStreet, setCity, setAddressState, setZipCode, setDepartment, resetProfil } from '../../store/createEmployeeState';
import { Modal } from '../Modal/Modal';
import { toggleModal } from '../../store/modal';

export function CreateEmployeeForm() {
    
const dispatch = useDispatch()

    /* const [firstName, setFirstName] = useState('') */
    /* const [lastName, setLastName] = useState('') */
    /* const [dateOfBirth, setDateOfBirth] = useState('') */
    /* const [startDate, setStartDate] = useState('') */
    /* const [street, setStreet] = useState('') */
    /* const [city, setCity] = useState('') */
    /* const [addressState, setAddressState] = useState('') */
    /* const [zipCode, setZipCode] = useState('') */
    /* const [department, setDepartment] = useState('') */

    const list = useSelector((state) => state).employeeList.list
    const employeeProfil = useSelector((state) => state).createEmployee

    const chooseState = (state) => {
        dispatch(setAddressState(state))
    }

    const chooseDepartment = (dpt) => {
        dispatch(setDepartment(dpt))
    }

    function saveEmployee(e){
        e.preventDefault()
        list.push(employeeProfil)
        dispatch(toggleModal())
    }
    
    const statesList = STATES.map((e) => {
        return (e.name)
    })


    return (
        <div className='container'>
            <h2>Create Employee</h2>
            <form onSubmit={saveEmployee}>
                <label htmlFor="first-name">First Name</label>
                <input id="first-name" type={"texte"} required onChange={(e) => dispatch(setFirstName(e.target.value))}></input>
                <label htmlFor="last-name">Last Name</label>
                <input id="last-name" type={"texte"} required onChange={(e) => dispatch(setLastName(e.target.value))}></input>
                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type={"date"} required onChange={(e) => dispatch(setDateOfBirth(e.target.value))}></input>
                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type={"date"} required onChange={(e) => dispatch(setStartDate(e.target.value))}></input>
                <fieldset className='address'>
                    <legend>Address</legend>
                    <label htmlFor="street">Street</label>
                    <input id="street" type={"texte"} required onChange={(e) => dispatch(setStreet(e.target.value))}></input>
                    <label htmlFor="city">City</label>
                    <input id="city" type={"texte"} required onChange={(e) => dispatch(setCity(e.target.value))}></input>
                    <Dropdown list={statesList} label="State" id="state" required selection={chooseState}/>
                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type={"number"} required onChange={(e) => dispatch(setZipCode(e.target.value))}></input>
                </fieldset>
                <Dropdown list={DEPARTMENT} label="Department" id="department" required selection={chooseDepartment}/>  
                <button className="save-button" type='submit'>Save</button>  
            </form>
            <Modal msg={'Employee Created!'}/>
            <button onClick={() => console.log(employeeProfil)}>PRof</button> 
        </div> 
    )
}