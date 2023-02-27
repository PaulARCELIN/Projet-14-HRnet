import { useSelector } from 'react-redux'
import './EmployeesList.css'
import { SearchBar } from '../SearchBar/SearchBar'
import { useState } from 'react'


export function EmployeesList() {
    
    const [searchInput, setSearchInput] = useState('')

    function getSearchInput(input) {
        setSearchInput(input)
    } 

    const list = useSelector((state) => state).employeeList.list
    
    function searchBarAlgo(employee) {
        if(searchInput.length >= 1) {     
            if(employee.firstName.toUpperCase().includes(searchInput.toUpperCase()) 
            || employee.lastName.toUpperCase().includes(searchInput.toUpperCase()) 
            || employee.startDate.toUpperCase().includes(searchInput.toUpperCase())
            || employee.department.toUpperCase().includes(searchInput.toUpperCase())
            || employee.dateOfBirth.toUpperCase().includes(searchInput.toUpperCase())
            || employee.street.toUpperCase().includes(searchInput.toUpperCase())
            || employee.city.toUpperCase().includes(searchInput.toUpperCase())
            || employee.addressState.toUpperCase().includes(searchInput.toUpperCase())){
                return true
            }
            else {
                return false
            }      
        }
        else return true     
    }

    return (<div>
        <SearchBar selection={getSearchInput}/>
        <div className='table'>
            <div className='table-titles'>
                <div className='title'><p>First Name</p></div>
                <div className='title'><p>Last Name</p></div>
                <div className='title'><p>Start Date</p></div>
                <div className='title'><p>Department</p></div>
                <div className='title'><p>Date of Birth</p></div>
                <div className='title'><p>Street</p></div>
                <div className='title'><p>City</p></div>
                <div className='title'><p>State</p></div>
                <div className='title'><p>Zip Code</p></div>
            </div>
            <div className='table-content'>
                {list.map((element) => {
                    if(searchBarAlgo(element)) {
                        return (<div className='table-line'>
                        <div className='table-cell'><p>{element.firstName}</p></div>
                        <div className='table-cell'><p>{element.lastName}</p></div>
                        <div className='table-cell'><p>{element.startDate}</p></div>
                        <div className='table-cell'><p>{element.department}</p></div>
                        <div className='table-cell'><p>{element.dateOfBirth}</p></div>
                        <div className='table-cell'><p>{element.street}</p></div>
                        <div className='table-cell'><p>{element.city}</p></div>
                        <div className='table-cell'><p>{element.addressState}</p></div>
                        <div className='table-cell'><p>{element.zipCode}</p></div>
                    </div>)
                    }
                    
                })}
            </div>
        </div>
        <button onClick={() => console.log(searchInput,list)}>LIST</button>
    </div>)
}