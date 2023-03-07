import { Dropdown } from '../Dropdown/Dropdown'
import { STATES, DEPARTMENT } from '../../variables/stateList'
import './CreateEmployeeForm.css'
import { useDispatch, useSelector } from "react-redux";
import { setFirstName, setLastName, setDateOfBirth, setStartDate, setStreet, setCity, setAddressState, setZipCode, setDepartment, resetProfil } from '../../store/createEmployeeState';
import { Modal } from '../Modal/Modal';
import { toggleEmployeeCreatedModal } from '../../store/modal';
import { postProfil } from '../../services/api';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'



export function CreateEmployeeForm() {
    
const dispatch = useDispatch()

    const employeeProfil = useSelector((state) => state).createEmployee
    const birthDate = employeeProfil.dateOfBirth
    const startDate = employeeProfil.startDate

    const modalState = useSelector((state) => state.modal)

    const bodyRequest = employeeProfil

    const chooseState = (state) => {
        dispatch(setAddressState(state))
    }

    const chooseDepartment = (dpt) => {
        dispatch(setDepartment(dpt))
    }

    const saveEmployee = async (e) => {
        e.preventDefault()
        postProfil(bodyRequest)
        dispatch(toggleEmployeeCreatedModal())
        dispatch(resetProfil())
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
                {/* <input id="date-of-birth" type={"date"} required onChange={(e) => dispatch(setDateOfBirth(e.target.value))}></input> */}
                <ReactDatePicker id="date-of-birth" selected={birthDate} onChange={(date) => dispatch(setDateOfBirth(date))}/>
                <label htmlFor="start-date">Start Date</label>
                <ReactDatePicker id="start-date" selected={startDate} onChange={(date) => dispatch(setStartDate(date))}/>
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
            <Modal msg={'Employee Created!'} toggle={toggleEmployeeCreatedModal()} state={modalState.isEmployeeCreatedModalOpen}/>            
        </div>    
    )
}