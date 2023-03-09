import './EmployeesList.css'
import { SearchBar } from '../SearchBar/SearchBar'
import { useEffect, useState } from 'react'
import { getEmployees } from '../../services/api'
/* import { Dropdown } from '../Dropdown/Dropdown' */
import { Dropdown } from 'dropdown-paul-arcelin'


export function EmployeesList() {
    
    const [searchInput, setSearchInput] = useState('')
    const [orderKey, setOrderKey] = useState('firstName')
    const [reverseKey, setReverseKey] = useState(false)
    const [list, setList] = useState([])
    const [entry, setEntry] = useState(5)

    const entryChoice = [5, 10, 25, 50, 100]
    
    useEffect(() => {
        initData()
    }, [])

    async function initData() {
        const data = await getEmployees()
        setList(data)
    }
    
    list.sort((a, b) => {
        
        let direction = 1;
        
        let valueA = a[orderKey];
        let valueB = b[orderKey];

        if (reverseKey === false)
            direction = 1;
        if (reverseKey === true)
            direction = -1;

        if (valueA > valueB)
            return 1 * direction;
        if (valueB > valueA)
            return -1 * direction;

        return 0;
    });

   
    const displayedList = list.filter(e => list.indexOf(e) < entry)
    
    console.log(displayedList)

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

    function sortClick(key) {
        if(orderKey === key) {
            setReverseKey(!reverseKey)
        }
        else {
            setReverseKey(false)
        }
        setOrderKey(key)
    }

    function setSortIcon(key) {
        if(orderKey === key && reverseKey === false) {
            return (<i className="fa-solid fa-caret-up active-icon"></i>)
        } 
        else if (orderKey === key && reverseKey === true) {
            return (<i className="fa-solid fa-caret-down active-icon"></i>)
        }
        else {
            return (
            <div className='inactive-icon'>    
                <i className="fa-solid fa-caret-up"></i>
                <i className="fa-solid fa-caret-down"></i>
            </div>)
        }
    }

    return (<div>
        <div className='tools'>
            <Dropdown list={entryChoice} label="Entry :" id="entry-dropdown" selection={setEntry}/>
            <SearchBar selection={setSearchInput}/>
        </div>
        <div className='table'>
            <div className='table-titles'>
                <div className='title' onClick={() => sortClick('firstName')}><p>First Name</p>{setSortIcon('firstName')}</div>
                <div className='title' onClick={() => sortClick('lastName')}><p>Last Name</p>{setSortIcon('lastName')}</div>
                <div className='title' onClick={() => sortClick('startDate')}><p>Start Date</p>{setSortIcon('startDate')}</div>
                <div className='title' onClick={() => sortClick('department')}><p>Department</p>{setSortIcon('department')}</div>
                <div className='title' onClick={() => sortClick('dateOfBirth')}><p>Date of Birth</p>{setSortIcon('dateOfBirth')}</div>
                <div className='title' onClick={() => sortClick('street')}><p>Street</p>{setSortIcon('street')}</div>
                <div className='title' onClick={() => sortClick('city')}><p>City</p>{setSortIcon('city')}</div>
                <div className='title' onClick={() => sortClick('addressState')}><p>State</p>{setSortIcon('addressState')}</div>
                <div className='title' onClick={() => sortClick('zipCode')}><p>Zip Code</p>{setSortIcon('zipCode')}</div>
            </div>
            <div className='table-content'>
                {displayedList.map((element) => {
                    if(searchBarAlgo(element)) {
                        return (<div className='table-line'>
                        <div className='table-cell'><p>{element.firstName}</p></div>
                        <div className='table-cell'><p>{element.lastName}</p></div>
                        <div className='table-cell'><p>{element.startDate.slice(0, 10)}</p></div>
                        <div className='table-cell'><p>{element.department}</p></div>
                        <div className='table-cell'><p>{element.dateOfBirth.slice(0, 10)}</p></div>
                        <div className='table-cell'><p>{element.street}</p></div>
                        <div className='table-cell'><p>{element.city}</p></div>
                        <div className='table-cell'><p>{element.addressState}</p></div>
                        <div className='table-cell'><p>{element.zipCode}</p></div>
                    </div>)
                    } 
                })}
            </div>
            <div>
                <p>Entry shown {displayedList.length} of {list.length}</p>
            </div>
            
        </div>
    </div>)
}